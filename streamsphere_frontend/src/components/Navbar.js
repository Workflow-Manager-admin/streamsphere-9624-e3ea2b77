import React from "react";

// PUBLIC_INTERFACE
function Navbar() {
  /**
   * OTT-style Top Navigation for StreamSphere.
   * Contains logo, content links (Home, TV Shows, Movies, News & Popular, My List),
   * with modern OTT spacing, dark background, and responsive behavior.
   */
  return (
    <nav
      className="navbar"
      style={{
        background: "var(--background-secondary)",
        padding: "0 3vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--border-color)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        boxSizing: "border-box",
        zIndex: 100,
        height: 68,
        minHeight: 56,
      }}
      role="navigation"
    >
      {/* Logo for StreamSphere */}
      <div
        className="logo"
        style={{
          fontSize: "1.44rem",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          letterSpacing: "0.5px",
          gap: 10,
          textShadow: "0 2px 12px #000a",
          userSelect: "none",
        }}
      >
        <span className="logo-symbol" style={{ color: "var(--accent-color)", fontSize: "2.1rem" }}>
          <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden focusable="false">
            <circle cx="16" cy="16" r="15" fill="var(--accent-color)" opacity="0.66" />
            <polygon points="13,11 24,16 13,21" fill="#fff" />
          </svg>
        </span>
        <span style={{fontWeight:900, color:'#fff'}}>StreamSphere</span>
      </div>
      {/* Navigation links, center-aligned */}
      <ul
        className="ott-nav-links"
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          gap: "2.4vw",
          flexWrap: "wrap",
          fontSize: "1.12rem",
        }}
      >
        {[
          { label: "Home", href: "#" },
          { label: "TV Shows", href: "#" },
          { label: "Movies", href: "#" },
          { label: "News & Popular", href: "#" },
          { label: "My List", href: "#" },
        ].map((nav) => (
          <li key={nav.label}>
            <a
              href={nav.href}
              style={{
                color: "var(--text-main)",
                textDecoration: "none",
                fontWeight: 600,
                padding: "8px 12px",
                borderRadius: 4,
                letterSpacing: "0.04em",
                transition: "color 0.16s, background 0.16s",
                display: "block",
                opacity: 0.92,
              }}
              onMouseOver={e => { e.currentTarget.style.color = "var(--accent-color)"; }}
              onMouseOut={e => { e.currentTarget.style.color = "var(--text-main)"; }}
            >
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Placeholder for user actions (profile, search, etc.) */}
      <div
        className="ott-navbar-right"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        {/* Placeholder avatar */}
        <span
          title="Your profile"
          style={{
            width: 36,
            height: 36,
            background: "var(--accent-color)",
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 17,
            color: "var(--accent-contrast)",
            userSelect: "none",
            letterSpacing: 0.5,
            boxShadow: "0 2.5px 12px #9b242433",
          }}
        >
          SS
        </span>
      </div>
      {/* Responsive: hide nav links for small screens, show burger (not implemented here) */}
      <style>{`
        @media (max-width: 780px) {
          .ott-nav-links {
            gap: 1.1vw !important;
            font-size: 1.01rem !important;
          }
          .logo > span {
            font-size: 1.18rem !important;
          }
        }
        @media (max-width: 550px) {
          .ott-nav-links {
            display: none !important;
          }
          .ott-navbar-right {
            margin-left: auto;
          }
          .logo span:last-child {
            font-size: 1.00rem !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
