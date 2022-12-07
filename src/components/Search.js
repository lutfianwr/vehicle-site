import React from "react";

const Search = ({ fetchData, search, setSearch, setOption }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <div className="flex justify-between items-center">
        <div className="my-4">
          <div className="input-group relative flex items-stretch w-full rounded">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="search"
              className="form-control w-80 relative flex-auto min-w-0 block px-3 py-1.5 font-normal text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              onClick={() => fetchData()}
              className="btn px-6 py-2 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center text-xs">
          <label className="px-2">Search by</label>
          <div className="w-52">
            <select
              onChange={(e) => setOption(e.target.value)}
              className="form-select w-full px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
            >
              <option defaultValue="ManufacturerName" value="ManufacturerName">
                Manufacturer Name
              </option>
              <option value="ManufacturerID">Manufacturer ID</option>
              <option value="Country">Country</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
