import { useLocation } from "wouter"
import countries from "../services/nameList"
import React, { useEffect, useRef, useState } from 'react'


const SearchBar = () => {
    const [filteredOptions,setFilteredOptions] = useState([])
    const inputRef = useRef(null)
    const [location, setLocation] = useLocation();

    const isCountryDetailPage = location.startsWith("/country/");

    const handleInputChange = () => {
        const inputValue = inputRef.current.value.toLowerCase();
        if (inputValue === "") {
          setFilteredOptions([]);
          return;
        }
        const regex = new RegExp(`^.*${inputValue.split("").join(".*")}.*$`, "i");
        const filtered = countries.filter((option) => {
          return regex.test(option);
        });
        setFilteredOptions(filtered);
      };

      const handleOptionClick = (option) => {
        inputRef.current.value = option;
        setFilteredOptions([]);

        if (isCountryDetailPage) {
            const currentCountryName = location.substring("/country/".length);
            if (currentCountryName !== option) {
                setLocation(`/country/${String(option)}`);
                window. location. reload()
            }
        } else {
            setLocation(`/country/${String(option)}`);
        }
      };

      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const inputValue = inputRef.current.value.toLowerCase();
            const matchedOption = filteredOptions.find(option => option.toLowerCase() === inputValue);
            if (matchedOption) {
                handleOptionClick(matchedOption);
            }
        }
    };

  return (
    <div>
         <input
        type="search"
        ref={inputRef}
        placeholder="Buscar..."
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      {filteredOptions.length > 0 && (
        <ul className="options">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar




