import React from "react";
import ContentCard from "./ContentCard";

// PUBLIC_INTERFACE
function SectionList({ title, items }) {
  /**
   * Renders a titled section with a horizontal scroll list of ContentCards.
   * Uses static content if no items are provided.
   * Updated spacing, visuals, and title bar to follow latest design extraction.
   */
  const stubItems =
    items ||
    Array.from({ length: 8 }).map((_, i) => ({
      title: `Poster ${i + 1}`,
      description: "Content teaser goes here.",
      image: `https://dummyimage.com/140x200/282828/eee&text=${i + 1}`,
    }));

  return (
    <section
      style={{
        width: "100%",
        marginBottom: 0,
        padding: 0,
        background: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 6,
          marginBottom: 15,
        }}
      >
        <h2
          style={{
            color: "var(--accent-color)",
            fontWeight: 700,
            fontSize: "1.19rem",
            margin: 0,
            letterSpacing: 1.18,
            textTransform: "uppercase",
            lineHeight: 1.12,
            textShadow: "0 1px 6px rgba(0,0,0,0.13)",
          }}
        >
          {title}
        </h2>
        {/* Optionally: Render a small accent line or icon here per design image if needed */}
      </div>
      <div
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          paddingBottom: 10,
          scrollbarColor: "var(--accent-color) var(--background-secondary)",
        }}
      >
        {stubItems.map((item, idx) => (
          <ContentCard
            key={idx}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionList;
