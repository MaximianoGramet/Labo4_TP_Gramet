import React, { useEffect, useState } from "react";
import { fetchSingleCountryData } from "../services/CountriesServices";
import { countryDTO } from "../services/Dto/CountriesDto";
import Navbar from "./Navbar";

const CountryDetails = ({params}) => {
  const [countryDetails, setCountryDetails] = useState(countryDTO);
  const countryName= params.countryName
  console.log(countryName);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSingleCountryData(countryName);
      console.log(data);
      if (data[0]) {
          const countryData = data[0];
          const updatedCountryDetails = { ...countryDetails };
          updatedCountryDetails.name.common = countryData.name.common;
          updatedCountryDetails.name.official = countryData.name.official;
          updatedCountryDetails.ccn3 = countryData.ccn3;
          updatedCountryDetails.cca3 = countryData.cca3;
          updatedCountryDetails.independent = countryData.independent;
          updatedCountryDetails.status = countryData.status;
          updatedCountryDetails.currencies = countryData.currencies;
          updatedCountryDetails.capital = countryData.capital;
          updatedCountryDetails.region = countryData.region;
          updatedCountryDetails.subregion = countryData.subregion;
          updatedCountryDetails.languages = countryData.languages;
          updatedCountryDetails.latlng = countryData.latlng;
          updatedCountryDetails.landlocked = countryData.landlocked;
          updatedCountryDetails.borders = countryData.borders;
          updatedCountryDetails.area = countryData.area;
          updatedCountryDetails.flag = countryData.flags.png;
          updatedCountryDetails.maps = countryData.maps;
          updatedCountryDetails.population = countryData.population;
          updatedCountryDetails.gini = countryData.gini;
          updatedCountryDetails.timezones = countryData.timezones;
          updatedCountryDetails.continents = countryData.continents;
          updatedCountryDetails.flags = countryData.flags;
          updatedCountryDetails.coatOfArms = countryData.coatOfArms;
          updatedCountryDetails.startOfWeek = countryData.startOfWeek;
          updatedCountryDetails.capitalInfo = countryData.capitalInfo;
          
          setCountryDetails(updatedCountryDetails);
        }
    };
    fetchData();
}, []);
  return (
    <div>
      <Navbar/>
      <div className="center">
      <section className="padding">
      <h2>{countryDetails.name.common}</h2>
      <img src={countryDetails.flag} alt="Flag" />
      <img className="coatOfArms" src={countryDetails.coatOfArms.png} alt=" Coat of Arms" />
      <p>Official Name: {countryDetails.name.official}</p>
      <p>CCN3: {countryDetails.ccn3}</p>
      <p>CCA3: {countryDetails.cca3}</p>
      <p>Independent: {countryDetails.independent===true?"Yes":"No"}</p>
      <p>Status: {countryDetails.status}</p>
      {/* <p>Currencies: {countryDetails.currencies}</p> */}
      <p>Capital: {countryDetails.capital}</p>
      <p>Region: {countryDetails.region}</p>
      <p>Subregion: {countryDetails.subregion}</p>
      {/* <p>Languages: {countryDetails.languages}</p>  */}
      {/* <p>Latitude and Longitude: {countryDetails.latlng}</p> */}
      <p>Landlocked: {countryDetails.landlocked.toString()}</p>
      {/* <p>Borders: {countryDetails.borders.join(", ")}</p> */}
      <p>Area: {countryDetails.area} km²</p>
      {/* Add rendering for maps, population, gini, timezones, continents, coatOfArms, startOfWeek, and capitalInfo as needed */}
      </section>
      </div>
    </div>
  );
};

export default CountryDetails;