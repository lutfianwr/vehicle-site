import React from "react";

const Table = () => {
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
        <tbody>
          <tr className="border-b">
            <td className="py-2">1</td>
            <td>8888</td>
            <td>USA</td>
            <td>Tesla</td>
            <td>detail</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">2</td>
            <td>8888</td>
            <td>USA</td>
            <td>Suzuki</td>
            <td>detail</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">3</td>
            <td>8888</td>
            <td>USA</td>
            <td>Suzuki</td>
            <td>detail</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
