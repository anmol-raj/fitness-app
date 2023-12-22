export const exerciseOptions = {
  method: "GET",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
};
