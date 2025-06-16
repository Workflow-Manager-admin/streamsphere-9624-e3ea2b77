import React from "react";

// PUBLIC_INTERFACE
function Carousel() {
  /**
   * Carousel displays featured content for StreamSphere.
   * This version is a static placeholder.
   */
  const featured = [
    {
      title: "Blockbuster Hit",
      subtitle: "StreamSphere Originals",
      description: "A thrilling adventure. Now streaming.",
      image:
        "https://dummyimage.com/680x260/181818/ffffff&text=Featured+Movie+1",
    },
    {
      title: "Epic Drama",
      subtitle: "Critically Acclaimed",
      description: "Dive into a world of emotion.",
      image:
        "https://dummyimage.com/680x260/282828/fff&text=Featured+Movie+2",
    },
  ];

  // For now, show the first slide only
  const slide = featured[0];

  return (
    <section
      className="carousel"
      style={{
        width: "100%",
        minHeight: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 48,
        background: "linear-gradient(to right, var(--accent-color) 6%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(24,24,24,0.84)",
          borderRadius: 16,
          boxShadow: "0 8px 24px 0 rgba(229,9,20,0.12)",
          padding: 0,
        }}
      >
        <img
          src={slide.image}
          alt={slide.title}
          style={{
            width: 220,
            height: 120,
            objectFit: "cover",
            borderRadius: "12px 0 0 12px",
            display: "block",
          }}
        />
        <div style={{ padding: "28px 44px", maxWidth: 400 }}>
          <span
            style={{
              color: "var(--accent-color)",
              fontWeight: 500,
              fontSize: "1rem",
              letterSpacing: 0.7,
            }}
          >
            {slide.subtitle}
          </span>
          <h2
            style={{
              color: "var(--accent-contrast)",
              margin: "10px 0 0",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            {slide.title}
          </h2>
          <div
            style={{
              color: "var(--text-secondary)",
              margin: "18px 0 0",
              fontSize: "1.04rem",
              fontWeight: 400,
            }}
          >
            {slide.description}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
