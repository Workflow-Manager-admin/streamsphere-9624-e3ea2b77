import React from "react";

// PUBLIC_INTERFACE
function ContentCard({ title, description, image }) {
  /**
   * Card for content items: poster image, title and short description.
   * This is a stub using static props.
   */
  return (
    <div
      className="content-card"
      style={{
        minWidth: 130,
        background: "var(--background-secondary)",
        height: 188,
        borderRadius: 8,
        border: "1.5px solid var(--border-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "var(--text-secondary)",
        fontSize: 16,
        boxSizing: "border-box",
        padding: 0,
        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: 110,
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "10px 8px 3px 8px", fontWeight: 500, color: "var(--accent-contrast)", width: "100%" }}>
        {title}
      </div>
      <div style={{ padding: "0 8px", color: "var(--text-secondary)", fontSize: 13, textAlign: "center", width: "100%" }}>
        {description}
      </div>
    </div>
  );
}

export default ContentCard;
