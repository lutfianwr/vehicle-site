import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({ vehicles, currentPage, offset }) => {
  const navigate = useNavigate();

  const currentVehicles = () => {
    return vehicles?.slice(
      currentPage === 1 ? 0 : offset * currentPage - offset,
      offset * currentPage
    );
  };

  return (
    <div className="flex justify-center">
      <table className="table-auto min-w-full">
        <thead className="bg-gray-100">
          <tr className="text-left border-b">
            <th className="p-2 lg:w-16"> No</th>
            <th className="lg:w-56">Manufacturer ID</th>
            <th className="lg:w-72">Country</th>
            <th>Manufacturer Name</th>
            <th className="lg:w-52">Action</th>
          </tr>
        </thead>

        {currentVehicles()?.map((vehicle, index) => {
          return (
            <tbody key={index}>
              <tr className="border-b text-sm">
                <td className="p-2">
                  {index + 1 * currentPage * offset - offset + 1}
                </td>
                <td>{vehicle.Mfr_ID}</td>
                <td>{vehicle.Country}</td>
                <td>{vehicle.Mfr_Name}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate("/details", {
                        state: { vehicle },
                      })
                    }
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-8 border border-teal-800 rounded-3xl"
                  >
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
