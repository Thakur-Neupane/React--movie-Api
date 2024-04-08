import axios from "axios";
const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=888958dc&t=";

export const fetchFromAPI = async (str) => {
  const response = await axios.get(apiUrl + str);
  console.log(response);
  return response.data;
};
