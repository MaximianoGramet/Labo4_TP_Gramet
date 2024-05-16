import React, { useState, useEffect } from "react";
import { fetchCountryData } from "../services/CountriesServices";
import CountryCard from "./CountryCard";
import "./CountryListComponent.css";

const CountryListComponent = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetchCountryData()
      .then((data) => {
        const processedData = processResponse(data);
        setCountryList(processedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const processResponse = (data) => {
    return data.map((country) => {
      return {
        name: {
          common: country.name.common || "",
        },
        flag: country.flags ? country.flags.png : "",
        coatOfArms: country.coatOfArms ? country.coatOfArms.png : "",
      };
    });
  };
  return (
    <div>
      <h1 className="titleList">Country List</h1>
      <div className="country-list">
        {countryList.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryListComponent;
