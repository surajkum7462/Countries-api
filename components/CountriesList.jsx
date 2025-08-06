import React from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
import useCountries from "../hooks/useCountries"; // 👈 adjust path as needed

export default function CountriesList({ query }) {
  const { countries, loading } = useCountries(query);

  if (loading) {
    return <CountriesListShimmer />;
  }

  return (
    <div className="countries-container">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          data={country}
        />
      ))}
    </div>
  );
}
