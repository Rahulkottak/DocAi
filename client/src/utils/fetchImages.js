export default async function fetchImages(query) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://bing-image-search1.p.rapidapi.com/images/search?q=${query}&count=30`,
    options
  );

  const { value } = await response.json();

  return value;
}
