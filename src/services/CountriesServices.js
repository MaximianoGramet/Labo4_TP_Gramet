import axios from "axios";
import { toast } from "react-toastify";

export const fetchCountryData = async () => {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data)
    .catch((error) => {
      const alert = () => toast.error(error);
      alert();
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
    const alert = () => toast.error(error);
    alert();
    console.error("Error fetching country data:", error);
    return null;
  }
};
