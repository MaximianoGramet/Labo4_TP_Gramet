import React from "react";
import { useLocation } from "wouter";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    const countryName = country.name.common
    setLocation(`/country/${String(countryName)}`);
  };

  return (
    <div className="country-card" onClick={handleClick}>
      <img src={country.flag} alt={country.name.common} className="flag" />
      <div className="country-details">
        <div className="country-name">{country.name.common}</div>
        {country.coatOfArms && (
          <img src={country.coatOfArms} alt="Coat of Arms" className="coat-of-arms" />
        )}
      </div>
    </div>
  );
};

export default CountryCard;
