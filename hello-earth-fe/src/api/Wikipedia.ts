export const getCountryDescription = async (countryName: string): Promise<string> => {
  const formattedName = countryName.replace(/ /g, "_");
  const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${formattedName}`);
  if (!res.ok) throw new Error("No se pudo obtener la descripción");
  const data = await res.json();
  return data.extract;
};
