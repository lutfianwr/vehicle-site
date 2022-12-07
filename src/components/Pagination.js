import React from "react";

const Pagination = ({ currentPage, setCurrentPage, vehicles, offset }) => {
  const limit = Math.ceil(vehicles?.length / offset);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    const limit = Math.ceil(vehicles.length / offset);
    if (currentPage < limit) {
      setCurrentPage(currentPage + 1);
    }
  };
  const toLastPage = () => {
    setCurrentPage(limit);
  };
  const toFirstPage = () => {
    setCurrentPage(1);
  };

  return (
    <div className="flex items-center content-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="xxx sm:flex sm:flex-1 sm:items-center sm:justify-between w-5/6">
        <div>
          <p className="text-sm text-gray-700">
            {`Showing `}
            <span className="font-medium">
              {vehicles?.length > 0 ? currentPage * offset - offset + 1 : 0}
            </span>
            {` to `}
            <span className="font-medium">
              {vehicles?.length < offset
                ? vehicles.length
                : currentPage * offset}
            </span>
            {` of `}
            <span className="font-medium"> {vehicles?.length} </span>
            results
          </p>
        </div>
        <div className={`${vehicles?.length < offset && "invisible "}`}>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              onClick={() => toFirstPage()}
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <span aria-hidden="true">&laquo;</span>
            </a>
            <a
              onClick={() => prevPage()}
              href="#"
              aria-current="page"
              className={`relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-20`}
            >
              {currentPage !== 1 && currentPage - 1}
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-20"
            >
              {currentPage}
            </a>
            <a
              onClick={() => nextPage()}
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-20"
            >
              {limit !== currentPage && currentPage + 1}
            </a>

            <a
              onClick={() => toLastPage()}
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-20"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
