import { useEffect, useState } from "react";

export default function useCountries(query) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,tld,languages,currencies,borders"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching countries:", err);
        setLoading(false);
      });
  }, []);

  // Filter countries based on query
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase()) || country.region.toLowerCase().includes(query.toLowerCase()) 
  );

  return { countries: filteredCountries, loading };
}
