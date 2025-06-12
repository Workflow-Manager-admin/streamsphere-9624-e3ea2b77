import React from "react";

// PUBLIC_INTERFACE
function SearchBar() {
  /**
   * SearchBar displays a search input for finding movies and shows.
   * Placeholder—no search logic yet.
   */
  return (
    <input
      className="search-bar"
      style={{
        background: "var(--background-secondary)",
        color: "var(--text-main)",
        border: "1px solid var(--border-color)",
        borderRadius: 4,
        padding: "6px 12px",
        outline: "none",
        fontSize: "1rem",
      }}
      type="search"
      placeholder="Search movies, shows..."
      aria-label="Search content"
      disabled // To indicate it's a stub for now
    />
  );
}

export default SearchBar;
