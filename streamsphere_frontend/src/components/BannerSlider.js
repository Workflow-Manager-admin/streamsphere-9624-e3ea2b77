import React, { useState, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * BannerSlider: Main hero/banner with visually engaging slider, arrows, dots and prominent featured images.
 * Follows the visual design: dark banner, accent edge, cover image, text overlays, and smooth transitions.
 */
function BannerSlider() {
  // Slides data — in practice, could come from props or API
  const slides = [
    {
      title: "Blockbuster Hit",
      subtitle: "StreamSphere Originals",
      description: "A thrilling adventure. Now streaming.",
      image: "https://dummyimage.com/740x310/181818/ffffff&text=Blockbuster+Hit",
      cta: "Watch Now",
      background:
        "linear-gradient(90deg, rgba(229,9,20,0.29) 0%, var(--background-main) 72%)",
    },
    {
      title: "Epic Drama",
      subtitle: "Critically Acclaimed",
      description: "Dive into a world of emotion and intrigue.",
      image: "https://dummyimage.com/740x310/282828/ffffff&text=Epic+Drama",
      cta: "Play",
      background:
        "linear-gradient(90deg, rgba(229,9,20,0.17) 0%, var(--background-main) 80%)",
    },
    {
      title: "Family Favourites",
      subtitle: "Top Picks for All",
      description: "Fun for everyone—see trending new series.",
      image: "https://dummyimage.com/740x310/222/fff&text=Family+Favourites",
      cta: "Browse Family",
      background:
        "linear-gradient(89deg, rgba(229,9,20,0.25) 0%, var(--background-main) 100%)",
    },
  ];

  const [current, setCurrent] = useState(0);
  const slideCount = slides.length;
  const timerRef = useRef(null);

  // Auto-advance carousel for a more dynamic look
  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 6000);
    return () => clearTimeout(timerRef.current);
  }, [current, slideCount]);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setCurrent((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
    } else if (e.key === "ArrowRight") {
      setCurrent((prev) => (prev + 1) % slideCount);
    }
  };

  // Handler for dot/circle navigation
  const goTo = (idx) => setCurrent(idx);

  // SVG arrow icons for navigation
  const Arrow = ({ dir, onClick, label }) => (
    <button
      aria-label={label}
      tabIndex={0}
      style={{
        position: "absolute",
        top: "50%",
        [dir]: 24,
        transform: "translateY(-50%)",
        background: "rgba(24,24,24,0.4)",
        border: "none",
        borderRadius: "50%",
        width: 38,
        height: 38,
        cursor: "pointer",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.18s",
        fontSize: 0,
      }}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? onClick() : null)}
    >
      {/* Simple left/right arrow SVG */}
      {dir === "left" ? (
        <svg width="23" height="23" fill="none">
          <path
            d="M14 18L8 12L14 6"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="23" height="23" fill="none">
          <path
            d="M9 6L15 12L9 18"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );

  // Accessibility/landmark: main banner region
  return (
    <section
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        marginTop: 76,
        width: "100%",
        minHeight: 328,
        background: slides[current].background || "var(--background-main)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.44s cubic-bezier(0.22, 0.68, 0.44, 1)",
      }}
      aria-label="featured carousel"
    >
      {/* Decorative accent bar (design left rail) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 36,
          height: 72,
          width: 14,
          background: "var(--accent-color)",
          opacity: 0.24,
          borderRadius: "0 18px 18px 0",
          filter: "blur(2px)",
          boxShadow: "7px 0 34px 1px var(--accent-color)",
          zIndex: 1,
        }}
      />
      {/* Main carousel content */}
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 56,
          maxWidth: 1030,
          minHeight: 310,
          padding: "0 10px",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Cover image */}
        <img
          src={slides[current].image}
          alt={slides[current].title}
          style={{
            width: 300,
            height: 173,
            objectFit: "cover",
            borderRadius: "16px 0 0 16px",
            boxShadow: "0 8px 28px 0 rgba(0,0,0,0.28)",
            background: "#222",
            display: "block",
            pointerEvents: "none",
            userSelect: "none",
          }}
          draggable={false}
        />
        {/* Text overlays */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "flex-start",
            justifyContent: "center",
            minWidth: 270,
            maxWidth: 430,
            background: "rgba(24,24,24,0.81)",
            borderRadius: "0 20px 20px 0",
            padding: "33px 38px 26px 36px",
            boxShadow: "0 3px 18px 2px rgba(229,9,20,0.10)",
          }}
        >
          <span
            style={{
              color: "var(--accent-color)",
              fontWeight: 600,
              fontSize: "1.13rem",
              letterSpacing: 1.3,
              padding: "2px 16px",
              borderRadius: 16,
              background: "rgba(229,9,20,0.12)",
              marginBottom: 2,
              marginLeft: -7,
              textShadow: "0 2px 14px #1a1a1abb",
              boxShadow: "0 2px 12px 0 rgba(229,9,20,0.10)",
            }}
          >
            {slides[current].subtitle}
          </span>
          <h1
            style={{
              color: "var(--accent-contrast)",
              fontSize: "2.28rem",
              lineHeight: 1.07,
              fontWeight: 800,
              margin: 0,
              textShadow: "0 2px 24px #000",
              letterSpacing: "1.1px",
            }}
          >
            {slides[current].title}
          </h1>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.09rem",
              fontWeight: 400,
              margin: "7px 0 0 0",
              maxWidth: 330,
            }}
          >
            {slides[current].description}
          </div>
          <button
            className="btn btn-large"
            style={{
              marginTop: 8,
              fontSize: "1.08rem",
              fontWeight: 600,
              background: "var(--accent-color)",
              color: "var(--accent-contrast)",
              border: "none",
              borderRadius: 5,
              padding: "12px 34px",
              boxShadow: "0 2px 14px 0 rgba(229,9,20,0.13)",
              cursor: "pointer",
              letterSpacing: 0.7,
            }}
            tabIndex={0}
          >
            {slides[current].cta}
          </button>
        </div>
      </div>
      {/* Previous/Next arrow controls */}
      <Arrow
        dir="left"
        label="Previous featured slide"
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slideCount - 1 : prev - 1))
        }
      />
      <Arrow
        dir="right"
        label="Next featured slide"
        onClick={() =>
          setCurrent((prev) => (prev + 1) % slideCount)
        }
      />

      {/* Indicator dots (below/centered for focus feedback) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 24,
          transform: "translateX(-50%)",
          display: "flex",
          gap: 15,
          zIndex: 4,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to featured slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            tabIndex={0}
            style={{
              width: 11,
              height: 11,
              background: idx === current
                ? "var(--accent-color)"
                : "rgba(229,9,20,0.25)",
              borderRadius: "50%",
              border: "none",
              margin: 0,
              outline: idx === current ? "2.5px solid var(--accent-contrast)" : "none",
              cursor: "pointer",
              transition: "background 0.17s, outline 0.14s",
              boxShadow: idx === current ? "0 0 8px 1px var(--accent-color)" : "none",
              opacity: idx === current ? 0.98 : 0.6,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default BannerSlider;
