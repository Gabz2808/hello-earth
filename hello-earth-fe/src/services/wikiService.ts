
export async function getCountryDescription(countryName: string): Promise<string> {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(countryName)}`
    );

    if (!response.ok) throw new Error("No se encontró información en Wikipedia");

    const data = await response.json();

    return data.extract || "No description available.";
  } catch (error) {
    console.error("Error fetching country description:", error);
    return "No description available.";
  }
}
