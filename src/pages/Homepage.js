import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Table from "../components/Table";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = cookies.token;
    if (!token) {
      navigate("/sign-in");
    }
  };

  return (
    <Layout>
      <div className="px-10">
        <Search />
        <Table />
        <Pagination />
      </div>
    </Layout>
  );
};

export default Homepage;
