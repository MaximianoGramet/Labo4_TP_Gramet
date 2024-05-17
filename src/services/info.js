import axios from "axios";
import fs from "fs";
const fetchSingleCountryData = async (countryName = "argentina") => {
  try {
    let nameList = [];
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    response.data.forEach((element) => {
      nameList.push(element.name.common);
    });
    const nameListJson = JSON.stringify(nameList, null, 2);

    fs.writeFile("nameList.txt", nameListJson, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("List saved to nameList.txt");
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
};
fetchSingleCountryData();
