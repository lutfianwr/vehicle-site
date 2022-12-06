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
  const navigate = useNavigate();
  const { searchInput, setSearchInput } = useContext(SearchContext);

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  const checkAuth = () => {
    const token = cookies.token;
    if (!token) {
      navigate("/sign-in");
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

      if (searchInput.length > 0) {
        let result = [];
        response.data.Results.forEach((item) => {
          if (item.Mfr_Name.toLowerCase().includes(searchInput.toLowerCase())) {
            result.push(item);
          }
        });
        setVehicles(result);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="px-10">
        <Search fetchData={fetchData} />
        <Table vehicles={vehicles} />
        <Pagination />
      </div>
    </Layout>
  );
};

export default Homepage;
