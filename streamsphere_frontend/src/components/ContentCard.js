import React from "react";

// PUBLIC_INTERFACE
function ContentCard({ title, description, image }) {
  /**
   * Card for content items: poster image, title and short description.
   * Adapted: Styling for modern width, rounded corners, and subtle elevation.
   */
  return (
    <div
      className="content-card"
      style={{
        minWidth: 144,
        maxWidth: 148,
        background: "var(--background-secondary)",
        height: 216,
        borderRadius: 13,
        border: "1.5px solid var(--border-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "var(--text-main)",
        fontSize: 16,
        boxSizing: "border-box",
        padding: 0,
        overflow: "hidden",
        boxShadow: "0 2.5px 16px 0 rgba(229,9,20,0.07)", // subtle highlight
        transition: "box-shadow 0.16s",
        position: "relative"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: 120,
          objectFit: "cover",
          borderRadius: "13px 13px 0 0",
        }}
      />
      <div 
        style={{
          padding: "12px 12px 2px 12px",
          fontWeight: 600,
          color: "var(--accent-contrast)",
          width: "100%",
          fontSize: "1.02rem",
          letterSpacing: 0.03,
          textAlign: "left",
        }}>
        {title}
      </div>
      <div 
        style={{
          padding: "0 12px",
          color: "var(--text-secondary)",
          fontSize: 13,
          textAlign: "left",
          width: "100%"
        }}>
        {description}
      </div>
      {/* Optionally: Add a modern play button overlay for new design if specified */}
    </div>
  );
}

export default ContentCard;
