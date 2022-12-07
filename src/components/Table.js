import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({
  vehicles,
  currentPage,
  setCurrentPage,
  searchInput,
  search,
  offset,
}) => {
  const navigate = useNavigate();
  // const offset = 9;

  const currentVehicles = () => {
    return vehicles?.slice(
      currentPage === 1 ? 0 : offset * currentPage - offset,
      offset * currentPage
    );
  };
  // const currentVehicles = () => {
  //   if (search.length < 1) {
  //     return vehicles?.slice(
  //       currentPage === 1 ? 0 : offset * currentPage - offset,
  //       offset * currentPage
  //     );
  //   } else {
  //     // setCurrentPage(1);
  //     let result = [];
  //     vehicles?.forEach((item) => {
  //       if (item.Mfr_Name.toLowerCase().includes(search.toLowerCase())) {
  //         result.push(item);
  //       }
  //     });
  //     return result?.slice(
  //       currentPage === 1 ? 0 : offset * currentPage - offset,
  //       offset * currentPage
  //     );
  //   }
  // };

  return (
    <div className="flex justify-center">
      <table className="table-auto min-w-full">
        <thead className="bg-gray-100">
          <tr className="text-left border-b">
            <th className="p-2"> No</th>
            <th>Manufacturer ID</th>
            <th>Country</th>
            <th>Manufacturer Name</th>
            <th>Action</th>
          </tr>
        </thead>

        {currentVehicles()?.map((vehicle, index) => {
          return (
            <tbody key={index}>
              <tr className="border-b">
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
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-1 px-8 border border-teal-700 rounded"
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
