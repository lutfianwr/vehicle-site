import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { Country, Mfr_CommonName, Mfr_ID, Mfr_Name, VehicleTypes } =
    state.vehicle;

  return (
    <Layout>
      <div className="container flex flex-col items-center py-5 px-20 justify-between">
        <div className="md:flex py-4">
          <p className="w-60 font-medium p-2">Manufacturer ID</p>
          <p className="w-80 p-2 bg-gray-100">{Mfr_ID}</p>
        </div>
        <div className="md:flex py-4">
          <p className="w-60 font-medium p-2">Manufacturer Name</p>
          <p className="w-80 p-2 bg-gray-100">{Mfr_Name}</p>
        </div>
        <div className="md:flex py-4">
          <p className="w-60 font-medium p-2">Manufacturer Common Name</p>
          <p className="w-80 p-2 bg-gray-100">{Mfr_CommonName}</p>
        </div>
        <div className="md:flex py-4">
          <p className="w-60 font-medium p-2">Country</p>
          <p className="w-80 p-2 bg-gray-100">{Country}</p>
        </div>
        <div className="md:flex py-4">
          <p className="w-60 font-medium p-2">Vehicle Types</p>
          <ol className="w-80 p-2 list-decimal">
            {VehicleTypes.length !== 0 ? (
              VehicleTypes.map((type, index) => {
                return (
                  <li className="mb-2" key={index}>
                    {type.Name}
                  </li>
                );
              })
            ) : (
              <p>No data</p>
            )}
          </ol>
        </div>
      </div>
      <div className="text-right px-20 ">
        <button
          onClick={() => navigate("/")}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-8 border border-teal-700 rounded"
        >
          Back
        </button>
      </div>
    </Layout>
  );
};

export default Details;
