export const getAllCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) throw new Error("Error fetching countries");
  return await res.json();
};
