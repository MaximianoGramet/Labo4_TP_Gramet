import axios from "axios";

export const fetchCountryData = () => {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching country data:", error);
      throw error;
    });
};

export const fetchSingleCountryData = async (countryName) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
};
