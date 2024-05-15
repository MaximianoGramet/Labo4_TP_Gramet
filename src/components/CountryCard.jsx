import React, { useState } from "react";
import "./CountryCard.css";
import CountryDetails from "./CountryDetails";

const CountryCard = ({ country }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    }
  return (
    <div className="country-card" onClick={handleClick}>
      <img src={country.flag} alt={country.name.common} className="flag" />
      <div className="country-details">
        <div className="country-name">{country.name.common}</div>
        {country.coatOfArms && (
          <img src={country.coatOfArms} alt="Coat of Arms" className="coat-of-arms" />
        )}
      </div>
      {isClicked && <CountryDetails country={country.name.common} />}
    </div>
  );
};

export default CountryCard;
