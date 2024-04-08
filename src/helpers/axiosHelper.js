import axios from "axios";
const apiUrl = "https://www.omdbapi.com/?apikey=bc59ef6f&t=";

export const fetchFromAPI = async (str) => {
  const response = await axios.get(apiUrl + str);
  console.log(response);
  return response.data;
};
