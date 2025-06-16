import React from "react";
import ProfileIcon from "./ProfileIcon";
import SearchBar from "./SearchBar";

// PUBLIC_INTERFACE
function Navbar() {
  /**
   * The Navbar component displays the StreamSphere logo, a search bar, and a profile icon.
   * Uses minimalist styles and placeholder data.
   */
  return (
    <nav
      className="navbar"
      style={{
        background: "var(--background-secondary)",
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--border-color)",
        position: "fixed",
        top: 0,
        width: "100%",
        boxSizing: "border-box",
        zIndex: 100,
      }}
    >
      <div
        className="logo"
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span className="logo-symbol" style={{ color: "var(--accent-color)" }}>
          🎬
        </span>
        StreamSphere
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <SearchBar />
        <ProfileIcon username="SS" />
      </div>
    </nav>
  );
}

export default Navbar;
