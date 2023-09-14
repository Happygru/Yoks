import { GOOGLE_API_KEY } from "./config";

export const getGPSPosition = async (address) => {
  const result = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`
  ).then((response) => response.json());
  const position = result.results[0].geometry.location;
  return `${position.lat}, ${position.lng}`;
};
