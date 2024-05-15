import axios from "axios";
const fetchSingleCountryData = async (countryName = "argentina") => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
};
fetchSingleCountryData();
