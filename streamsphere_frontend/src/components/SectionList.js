import React from "react";
import ContentCard from "./ContentCard";

// PUBLIC_INTERFACE
function SectionList({ title, items }) {
  /**
   * Renders a titled section with a horizontal scroll list of ContentCards.
   * Uses static content if no items are provided.
   */
  const stubItems =
    items ||
    Array.from({ length: 8 }).map((_, i) => ({
      title: `Poster ${i + 1}`,
      description: "Content teaser goes here.",
      image: `https://dummyimage.com/130x188/282828/eee&text=${i + 1}`,
    }));

  return (
    <section style={{ width: "100%" }}>
      <h2
        style={{
          color: "var(--accent-color)",
          fontWeight: 600,
          fontSize: "1.35rem",
          margin: 0,
          marginBottom: 16,
          letterSpacing: 1.1,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          gap: 18,
          overflowX: "auto",
          paddingBottom: 6,
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
