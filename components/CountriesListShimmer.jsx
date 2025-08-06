import React from "react";
import "./CountriesListShimmer.css";

export default function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="country-card shimmer-card">
          <div className="shimmer-flag shimmer"></div>
          <div className="shimmer-text shimmer title"></div>
          <div className="shimmer-text shimmer"></div>
          <div className="shimmer-text shimmer"></div>
          <div className="shimmer-text shimmer"></div>
        </div>
      ))}
    </div>
  );
}
