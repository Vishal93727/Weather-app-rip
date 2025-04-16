import React, { useEffect, useState } from "react";
import Papa from "papaparse"; 
import Dashboard from "../components/Dashboard/Dashboard.jsx";
import Header from "../components/Header/Header.jsx";

const Api = () => {
 
  return (
    <>
    <Header city={city} search={search}/>
      <Dashboard city={city} />
      
    </>
  );
};

export default Api;
