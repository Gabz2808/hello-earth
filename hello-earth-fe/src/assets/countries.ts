const fetchCountries = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json();
  console.log(countries);
};
