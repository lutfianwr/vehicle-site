import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Table from "../components/Table";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchContext } from "../utils/context";
import { useContext } from "react";

const Homepage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [vehicles, setVehicles] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("ManufacturerName");

  const { searchInput, setSearchInput } = useContext(SearchContext);

  const navigate = useNavigate();
  const offset = 8;

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  const checkAuth = () => {
    const token = cookies.token;
    if (!token) {
      navigate("/sign-in");
    } else {
      setCookie("token", token, {
        secure: true,
        sameSite: "strict",
        maxAge: "7200",
        path: "/",
      });
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setVehicles(response.data.Results);

      if (search.length > 0) {
        let result = [];
        response.data.Results.forEach((item) => {
          if (
            option === "ManufacturerName" &&
            item.Mfr_Name.toLowerCase().includes(search.toLowerCase())
          ) {
            result.push(item);
          } else if (
            option === "Country" &&
            item.Country.toLowerCase().includes(search.toLowerCase())
          ) {
            result.push(item);
          } else if (
            option === "ManufacturerID" &&
            item.Mfr_ID.toString().includes(search.toLowerCase())
          ) {
            result.push(item);
          }
        });
        setVehicles(result);
      }
      setCurrentPage(1);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="px-10">
        <Search
          fetchData={fetchData}
          setSearch={setSearch}
          search={search}
          setOption={setOption}
        />
        <Table
          vehicles={vehicles}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchInput={searchInput}
          search={search}
          offset={offset}
        />
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          vehicles={vehicles}
          offset={offset}
        />
      </div>
    </Layout>
  );
};

export default Homepage;
