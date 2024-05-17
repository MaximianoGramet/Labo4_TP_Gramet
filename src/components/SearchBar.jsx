import { useLocation } from "wouter"
import countries from "../services/nameList"
import React, { useRef, useState } from 'react'


const SearchBar = () => {
    const [filteredOptions,setFilteredOptions] = useState([])
    const inputRef = useRef(null)
    const [location, setLocation] = useLocation();

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
        setLocation(`/country/${String(option)}`);
      };

  return (
    <div>
         <input
        type="search"
        ref={inputRef}
        placeholder="Buscar..."
        onChange={handleInputChange}
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


