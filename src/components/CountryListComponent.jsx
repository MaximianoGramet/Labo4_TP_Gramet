import React, { useState, useEffect } from "react";
import { fetchCountryData } from "../services/CountriesServices";
import CountryCard from "./CountryCard";
import "./CountryListComponent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CountryListComponent = () => {
  const [countryList, setCountryList] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("name");

  useEffect(() => {
    toast.promise(
      fetchCountryData()
        .then((data) => {
          const processedData = processResponse(data);
          setCountryList(processedData);
          sortCountryList(processedData, sortCriteria);
        }),
      {
        pending: "Fetching data",
        success: "Data fetched successfully",
        error: "Error fetching countries",
      }
    );
  }, []);

  const processResponse = (data) => {
    return data.map((country) => ({
      name: {
        common: country.name.common || "",
      },
      flag: country.flags ? country.flags.png : "",
      coatOfArms: country.coatOfArms ? country.coatOfArms.png : "",
      population: country.population || "",
      area: country.area || "",
    }));
  };

  const sortCountryList = (list, criteria) => {
    const sortedList = [...list].sort((a, b) => {
      if (criteria === "name") {
        return a.name.common.localeCompare(b.name.common);
      } else if (criteria === "population") {
        return b.population - a.population;
      } else if (criteria === "area") {
        return b.area - a.area;
      } else {
        return 0;
      }
    });
    setCountryList(sortedList);
  };

  useEffect(() => {
    sortCountryList(countryList, sortCriteria);
  }, [sortCriteria]);

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  return (
    <div>
      <h1 className="titleList">Country List</h1>
      <div className="sort-container">
        <label >Sort by: </label>  
        <select  
          id="sort-select"
          className="sort-select" 
          onChange={handleSortChange} 
          value={sortCriteria}>
          <option value="name">Name</option>
          <option value="population">Population</option>
          <option value="area">Area</option>
        </select>
      </div>
      <div className="country-list">
        {countryList.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CountryListComponent;
