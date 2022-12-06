import React, { useMemo, useState } from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { SearchContext } from "./utils/context";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const input = useMemo(() => ({ searchInput, setSearchInput }), [searchInput]);

  return (
    <SearchContext.Provider value={input}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/sign-in" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </SearchContext.Provider>
  );
};

export default App;
