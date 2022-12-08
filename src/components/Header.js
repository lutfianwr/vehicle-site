import React, { useEffect, useLayoutEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    removeCookie("token");
    localStorage.removeItem("user");
    navigate("/sign-in");
  };

  const toggleDropDown = () => {
    const dropDown = document.getElementById("dropdown");
    dropDown.classList.contains("hidden")
      ? dropDown.classList.remove("hidden")
      : dropDown.classList.add("hidden");
  };

  const hideDropDown = () => {
    const dropDown = document.getElementById("dropdown");
    dropDown.classList.add("hidden");
  };

  const fetchUser = async () => {
    try {
      const user = localStorage.getItem("user");
      const temp = JSON.parse(user);

      setUser(temp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className="flex items-center justify-between p-4 text-teal-600"
      onMouseLeave={() => hideDropDown()}
    >
      <a href="." className="flex items-center flex-shrink-0 mr-6">
        <div className="bg-gradient-to-r from-teal-500 to-teal-200 mx-2 rounded-3xl">
          <svg
            className="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" />
          </svg>
        </div>
        <span className="logo text-xl font-semibold text-black">
          Vehicle Database
        </span>
      </a>

      <div className="flex items-center">
        <div className="flex items-center w-48">
          <img
            src={user?.image || `https://i.pravatar.cc/40`}
            className="rounded-full w-10 bg-white border"
            alt="https://i.pravatar.cc/300"
          />
          <div className="px-4">
            <p className="font-semibold">Hi, {user?.firstName}</p>
            <p className="text-xs text-black">{user?.email}</p>
          </div>
        </div>

        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={() => toggleDropDown()}
              type="button"
              className="inline-flex w-full justify-center rounded-3xl border border-gray-300 bg-teal-600 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
          </div>

          <div
            className="absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            id="dropdown"
          >
            <div className="py-1" role="none">
              <button
                onClick={() => handleLogout()}
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                role="menuitem"
                id="menu-item-3"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
