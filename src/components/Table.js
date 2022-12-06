import React from "react";

const Table = ({ vehicles }) => {
  return (
    <div className="flex justify-center">
      <table className="table-auto min-w-full">
        <thead className="bg-gray-50">
          <tr className="text-left border-b">
            <th className="py-2">No</th>
            <th>Manufacturer ID</th>
            <th>Country</th>
            <th>Manufacturer Name</th>
            <th>Action</th>
          </tr>
        </thead>

        {vehicles &&
          vehicles.map((vehicle, index) => {
            return (
              <tbody key={index}>
                <tr className="border-b">
                  <td className="py-2">{index + 1}</td>
                  <td>{vehicle.Mfr_ID}</td>
                  <td>{vehicle.Country}</td>
                  <td>{vehicle.Mfr_Name}</td>
                  <td>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-8 border border-teal-700 rounded">
                      Details
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Table;
