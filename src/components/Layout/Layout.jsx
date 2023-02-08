import React from "react";
import ShipmentsTable from "../Table/Table";
import SearchAria from "../SearchAria/SearchAria";
import "./Layout.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const Layout = () => {
  const [shipments, setShipments] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [sortData, setSortData] = useState("");

  const handleDataChange = (newData) => {
    setSearchData(newData);
  };

  const handleSortDataChange = (newData) => {
    setSortData(newData);
  };

  let url = "";
  if (
    (searchData === "" && sortData === "") ||
    (searchData === "" && sortData === 6)
  ) {
    url =
      "https://delivery-module-production.up.railway.app/api/shipping_order";
  } else if (
    (searchData === "" && sortData !== "" && sortData !== 6) ||
    (searchData !== "" && sortData !== "" && sortData !== 6)
  ) {
    url =
      "https://delivery-module-production.up.railway.app/api/shipping_order/group/status/" +
      sortData;
  } else {
    url =
      "https://delivery-module-production.up.railway.app/api/shipping_order/" +
      searchData;
  }
  console.log(url);

  useEffect(() => {
    axios
      .get(url)
      // http://localhost:8083/api/shipping_order
      // https://delivery-module-production.up.railway.app/api/shipping_order
      .then((res) => {
        console.log(res.data);
        setShipments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return (
    <div>
      <SearchAria onDataChange={handleDataChange} />
      <div className="Layout">
        <Routes className="Main">
          <Route
            path="/"
            element=<ShipmentsTable
              shipments={shipments}
              onDataChange={handleSortDataChange}
            />
          />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
