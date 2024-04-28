import { URL } from "../constants/baseUrl";

const getAllNews = async () => {
  const response = await fetch(URL + "/news");
  const data = await response.json();
  return data;
};

export const NewsServices = {
  getAllNews,
};
