import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/sign-in" element={<Login />} />
          <Route exact path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
