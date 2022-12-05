import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center content-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="xxx sm:flex sm:flex-1 sm:items-center sm:justify-between w-5/6">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium"> 1 </span>
            to
            <span className="font-medium"> 10 </span>
            of
            <span className="font-medium"> 97 </span>
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <span aria-hidden="true">&laquo;</span>
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              3
            </a>

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              {/* <span class="sr-only">Next</span> */}
              <span aria-hidden="true">&raquo;</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
