import React, { useState } from "react";

// PUBLIC_INTERFACE
function Carousel() {
  /**
   * Carousel displays featured content for StreamSphere with slider controls.
   * Uses StreamSphere's bold/modern color palette and cinematic card style.
   * Placeholder slides are used for featured/trending content.
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
    {
      title: "Sci-Fi Spectacle",
      subtitle: "Trending Now",
      description: "New worlds await in this sci-fi blockbuster.",
      image:
        "https://dummyimage.com/680x260/E50914/191919&text=Featured+Movie+3",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? featured.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === featured.length - 1 ? 0 : prev + 1
    );
  };

  const slide = featured[activeIndex];

  // Carousel slide indicators (dots)
  const Indicators = () => (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
      aria-label="Carousel Indicators"
    >
      {featured.map((_, idx) => (
        <span
          key={idx}
          style={{
            display: "inline-block",
            width: activeIndex === idx ? 18 : 10,
            height: 10,
            borderRadius: 5,
            background:
              activeIndex === idx
                ? "var(--accent-color)"
                : "rgba(255,255,255,0.26)",
            transition: "width 0.18s, background 0.18s",
            cursor: "pointer",
          }}
          aria-label={`Go to slide ${idx + 1}`}
          role="button"
          tabIndex={0}
          onClick={() => setActiveIndex(idx)}
        />
      ))}
    </div>
  );

  // Carousel slider area with visual style referencing the original image
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
        background:
          "linear-gradient(90deg, var(--accent-color) 6%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(24,24,24,0.92)",
          borderRadius: 18,
          boxShadow: "0 8px 24px 0 rgba(229,9,20,0.10)",
          overflow: "hidden",
          position: "relative",
          minWidth: 550,
          maxWidth: 720,
        }}
      >
        {/* Prev Button */}
        <button
          aria-label="Previous"
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "rgba(0,0,0,0.35)",
            border: "none",
            color: "var(--accent-contrast)",
            borderRadius: "50%",
            width: 36,
            height: 36,
            fontWeight: 900,
            fontSize: 24,
            cursor: "pointer",
            outline: "none",
            transition: "background 0.2s",
          }}
          tabIndex={0}
        >
          &#8249;
        </button>
        {/* Slide Content */}
        <img
          src={slide.image}
          alt={slide.title}
          style={{
            width: 240,
            height: 140,
            objectFit: "cover",
            borderRadius: "12px 0 0 12px",
            display: "block",
            boxShadow: "0 4px 16px rgba(0,0,0,0.20)",
            marginLeft: 44,
          }}
        />
        <div
          style={{
            padding: "34px 44px",
            maxWidth: 440,
            minWidth: 260,
            boxSizing: "border-box",
            textAlign: "left",
          }}
        >
          <span
            style={{
              color: "var(--accent-color)",
              fontWeight: 500,
              fontSize: "1.03rem",
              letterSpacing: 1.1,
            }}
          >
            {slide.subtitle}
          </span>
          <h2
            style={{
              color: "var(--accent-contrast)",
              margin: "11px 0 0",
              fontSize: "2.35rem",
              fontWeight: 700,
              letterSpacing: 0.04,
              lineHeight: 1.18,
              textShadow: "0 2px 8px rgba(0,0,0,0.23)"
            }}
          >
            {slide.title}
          </h2>
          <div
            style={{
              color: "var(--text-secondary)",
              margin: "17px 0 0",
              fontSize: "1.10rem",
              fontWeight: 400,
              maxWidth: "95%",
              lineHeight: 1.48,
            }}
          >
            {slide.description}
          </div>
        </div>
        {/* Next Button */}
        <button
          aria-label="Next"
          onClick={handleNext}
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "rgba(0,0,0,0.35)",
            border: "none",
            color: "var(--accent-contrast)",
            borderRadius: "50%",
            width: 36,
            height: 36,
            fontWeight: 900,
            fontSize: 24,
            cursor: "pointer",
            outline: "none",
            transition: "background 0.2s",
          }}
          tabIndex={0}
        >
          &#8250;
        </button>
      </div>
      {/* Indicators */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 18,
          width: "100%",
          zIndex: 3,
          pointerEvents: "auto",
        }}
      >
        <Indicators />
      </div>
    </section>
  );
}

export default Carousel;
