import React, { useState, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * BannerSlider: Netflix-style hero/banner replicating the look and feel of a cinematic OTT homepage.
 * Emphasizes overlays, gradients, image treatment, large text/hero CTA, and precise spacing & style.
 */
function BannerSlider() {
  // Slides data — in practice, could come from props or API
  const slides = [
    {
      title: "Blockbuster Hit",
      subtitle: "StreamSphere Originals",
      description: "A thrilling adventure. Now streaming.",
      image: "https://dummyimage.com/1120x520/171717/fff&text=Blockbuster+Hit",
      cta: "Watch Now",
    },
    {
      title: "Epic Drama",
      subtitle: "Critically Acclaimed",
      description: "Dive into a world of emotion and intrigue.",
      image: "https://dummyimage.com/1120x520/282828/fff&text=Epic+Drama",
      cta: "Play",
    },
    {
      title: "Family Favourites",
      subtitle: "Top Picks for All",
      description: "Fun for everyone—see trending new series.",
      image: "https://dummyimage.com/1120x520/111/fff&text=Family+Favourites",
      cta: "Browse Family",
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

  const goTo = (idx) => setCurrent(idx);

  // SVG arrow icons for navigation
  const Arrow = ({ dir, onClick, label }) => (
    <button
      aria-label={label}
      tabIndex={0}
      style={{
        position: "absolute",
        top: "50%",
        [dir]: 32,
        transform: "translateY(-50%)",
        background: "rgba(20,20,20,0.38)",
        border: "none",
        borderRadius: "50%",
        width: 48,
        height: 48,
        cursor: "pointer",
        zIndex: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.18s",
        fontSize: 0,
        boxShadow: "0 2px 20px rgba(0,0,0,0.18)",
      }}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? onClick() : null)}
    >
      {/* Simple left/right arrow SVG */}
      {dir === "left" ? (
        <svg width="26" height="26" fill="none">
          <path
            d="M16 21L8.75 13L16 5"
            stroke="#fff"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="26" height="26" fill="none">
          <path
            d="M10 5L17.25 13L10 21"
            stroke="#fff"
            strokeWidth="2.8"
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
        minHeight: 400,
        maxHeight: 600,
        background: "#141414",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.44s cubic-bezier(0.22, 0.68, 0.44, 1)",
        boxShadow: "0 10px 35px 0 #0008, 0 1px 0 #2228",
        borderBottom: "2.5px solid var(--accent-color)",
      }}
      aria-label="featured carousel"
    >
      {/* Banner-wide vertical dark-to-transparent gradient overlay */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(24,24,24,0.84) 0%, rgba(24,24,24,0.46) 34%, rgba(24,24,24,0.10) 78%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Edge accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 18,
          background: "var(--accent-color)",
          opacity: 0.19,
          borderRadius: "0 22px 22px 0",
          filter: "blur(4px)",
          boxShadow: "10px 0 44px 1px var(--accent-color)",
          zIndex: 4,
        }}
      />
      {/* Slide image with a *horizontal* dark fade overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <img
          src={slides[current].image}
          alt=""
          draggable={false}
          style={{
            width: "100%",
            minHeight: 340,
            maxHeight: 540,
            objectFit: "cover",
            objectPosition: "55% 50%",
            filter:
              "brightness(0.72) contrast(1.07) saturate(1.17) blur(0.2px)",
            transition: "filter 0.13s",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
          }}
        />
        {/* Cinematic horizontal fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, rgba(24,24,24, 0.98) 0%, rgba(24,24,24,0.83) 16%, rgba(24,24,24,0.14) 51%, rgba(24,24,24, 0.86) 99%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Main content row */}
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 0,
          position: "relative",
          zIndex: 5,
          width: "100%",
          padding: "0 0 0 40px",
          maxWidth: 1180,
          minHeight: 340,
          justifyContent: "flex-start",
        }}
      >
        {/* Hero text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 490,
            minWidth: 320,
            padding: "0 0 52px 0",
            gap: 0,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              color: "var(--accent-color)",
              fontWeight: 700,
              fontSize: "1.17rem",
              letterSpacing: "2.3px",
              background: "rgba(24,24,24,0.19)",
              textTransform: "uppercase",
              borderRadius: 14,
              padding: "4.5px 18px 4.5px 0",
              marginBottom: 12,
              boxShadow: "0 2px 10px 0 rgba(229,9,20,0.10)",
              textShadow:
                "0 2.4px 12px #800c1466, 0 0.5px 2.3px #111d",
            }}
          >
            {slides[current].subtitle}
          </span>
          <h1
            style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: "3.18rem",
              margin: "0 0 9px -2.5px",
              letterSpacing: "0.8px",
              textShadow:
                "0 5px 36px #000c,0 1.5px 3px #781,0 0 33px #0909, 0 2.5px 0 #201",
              lineHeight: "1.09",
              filter: "drop-shadow(0 6px 22px #0008)",
            }}
          >
            {slides[current].title}
          </h1>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.23rem",
              fontWeight: 400,
              margin: "0 0 16px 2.5px",
              maxWidth: 430,
              lineHeight: "1.48",
              textShadow: "0 1.5px 3px #000a",
            }}
          >
            {slides[current].description}
          </div>
          <button
            className="btn btn-large"
            style={{
              fontSize: "1.22rem",
              fontWeight: 700,
              background:
                "linear-gradient(90deg,var(--accent-color) 75%, #ea333d 100%)",
              color: "var(--accent-contrast)",
              border: "none",
              borderRadius: 6,
              padding: "14px 38px 13px 26px",
              marginTop: 2,
              boxShadow: "0 4px 24px 0 rgba(229,9,20,0.17), 0 1px 7px #0009",
              letterSpacing: 0.8,
              textShadow: "0 0.5px 3px #b10824bb",
              cursor: "pointer",
              outline: "none",
              filter: "brightness(1.04)",
              transition: "background 0.17s, filter 0.17s",
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
        onClick={() => setCurrent((prev) => (prev === 0 ? slideCount - 1 : prev - 1))}
      />
      <Arrow
        dir="right"
        label="Next featured slide"
        onClick={() => setCurrent((prev) => (prev + 1) % slideCount)}
      />

      {/* Indicator dots (centered, Netflix-like with shadow/focus) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 34,
          transform: "translateX(-50%)",
          display: "flex",
          gap: 21,
          zIndex: 10,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to featured slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            tabIndex={0}
            style={{
              width: 12,
              height: 12,
              background: idx === current
                ? "var(--accent-color)"
                : "rgba(229,9,20,0.28)",
              borderRadius: "50%",
              border: "none",
              margin: 0,
              outline: idx === current ? "2.5px solid var(--accent-contrast)" : "none",
              boxShadow: idx === current
                ? "0 0 16px 2px var(--accent-color), 0 0 3px 1.5px #fff5"
                : "0 0px 4px 0px #0009",
              opacity: idx === current ? 0.99 : 0.68,
              cursor: "pointer",
              transition: "background 0.17s, outline 0.14s, box-shadow 0.16s, opacity 0.13s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default BannerSlider;
