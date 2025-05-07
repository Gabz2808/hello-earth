export const getAllCurrrencies = async () => {
  const res = await fetch("https://v6.exchangerate-api.com/v6/6b1594bd1198bde8e93cd5ea/latest/USD");
  if (!res.ok) throw new Error("Error fetching currencies");
  return await res.json();
};
