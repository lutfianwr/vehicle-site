import React from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Table from "../components/Table";

const Homepage = () => {
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
