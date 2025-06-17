import React, { useState, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * BannerSlider: Matches Netflix hero/banner pixel styling
 * — Gradients, blending overlays, image mask, typography, and button are tuned for Netflix aesthetic and section precision.
 */
function BannerSlider() {
  const slides = [
    {
      title: "Blockbuster Hit",
      subtitle: "StreamSphere Originals",
      description: "A thrilling adventure. Now streaming.",
      image: "https://dummyimage.com/1600x650/191919/fff&text=Blockbuster+Hit",
      cta: "Watch Now",
    },
    {
      title: "Epic Drama",
      subtitle: "Critically Acclaimed",
      description: "Dive into a world of emotion and intrigue.",
      image: "https://dummyimage.com/1600x650/232323/fff&text=Epic+Drama",
      cta: "Play",
    },
    {
      title: "Family Favourites",
      subtitle: "Top Picks for All",
      description: "Fun for everyone—see trending new series.",
      image: "https://dummyimage.com/1600x650/111/fff&text=Family+Favourites",
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

  // SVG arrow icons for navigation (fine-tuned shape/size)
  const Arrow = ({ dir, onClick, label }) => (
    <button
      aria-label={label}
      tabIndex={0}
      style={{
        position: "absolute",
        top: "50%",
        [dir]: 36,
        transform: "translateY(-50%)",
        background: "rgba(18,18,18,0.55)",
        border: "none",
        borderRadius: "50%",
        width: 48,
        height: 48,
        cursor: "pointer",
        zIndex: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        transition: "background 0.18s, filter 0.11s",
        fontSize: 0,
        boxShadow:
          "0 1.5px 18px 0 #000a, 0 1px 8px 0 rgba(24,24,24,0.19)",
        filter: "drop-shadow(0 1.7px 12px #92061633)",
      }}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? onClick() : null)}
    >
      {dir === "left" ? (
        <svg width="22" height="22" fill="none">
          <path
            d="M14 19L7.75 11L14 3"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="22" height="22" fill="none">
          <path
            d="M8 3L14.25 11L8 19"
            stroke="#fff"
            strokeWidth="3"
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
        marginTop: 72,
        width: "100%",
        minHeight: 476,
        maxHeight: 610,
        background: "#181818",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.44s cubic-bezier(0.22, 0.68, 0.44, 1)",
        boxShadow: "0 19px 42px 0 #000a, 0 2px 0 #2829",
        borderBottom: "4.5px solid var(--accent-color)",
        borderTop: "0.5px solid #222",
        minWidth: 0,
        padding: 0,
      }}
      aria-label="featured carousel"
    >
      {/* Main background cinematic vertical gradient fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 6,
          background:
            "linear-gradient(180deg, #171717 0%, rgba(24,24,24,0.67) 43%, rgba(36,36,36,0.08) 80%, transparent 100%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Bottom dark vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 104,
          zIndex: 8,
          background:
            "linear-gradient(0deg,rgba(28,28,28,0.97) 7%,rgba(28,28,28,0.33) 61.5%,rgba(28,28,28,0) 95%)",
          pointerEvents: "none",
        }}
      />
      {/* Brighter accent on the left (Netflix style "glow bar") */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 8,
          background: "var(--accent-color)",
          opacity: 0.16,
          borderRadius: "0 18px 18px 0",
          filter: "blur(10.5px)",
          boxShadow: "10px 0 56px 2px var(--accent-color)",
          zIndex: 9,
        }}
      />
      {/* Slide full hero background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        <img
          src={slides[current].image}
          alt=""
          draggable={false}
          style={{
            width: "100%",
            minHeight: 440,
            maxHeight: 600,
            objectFit: "cover",
            objectPosition: "53% 38%",
            filter:
              "brightness(0.52) contrast(1.12) saturate(1.18) blur(0.10px)",
            transition: "filter 0.13s",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
          }}
        />
        {/* Left-to-right Netflix-style horizontal mask */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, #1b1b1b 10%, rgba(24,24,24,0.99) 24%, rgba(24,24,24, 0.21) 53%, rgba(24,24,24, 0.82) 98%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Main content row: Netflix banner alignment */}
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          zIndex: 18,
          width: "100%",
          padding: "0 0 0 76px",
          maxWidth: 1250,
          minHeight: 404,
          height: "calc(44vw + 76px)",
          justifyContent: "flex-start",
        }}
      >
        {/* Hero text column — Netflix-like layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 540,
            minWidth: 302,
            padding: "0 0 70px 0",
            gap: 0,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              color: "var(--accent-color)",
              fontWeight: 800,
              fontSize: "1.12rem",
              letterSpacing: "2.4px",
              lineHeight: 1.13,
              background: "rgba(14,13,13,0.13)",
              textTransform: "uppercase",
              borderRadius: 16,
              padding: "6.5px 22px 6.5px 5.5px",
              marginBottom: 13,
              boxShadow: "0 2px 10px 0 rgba(229,9,20,0.18)",
              textShadow:
                "0 1.2px 16px #ad0c1266, 0 1px 3px #221d,0 1.2px 1.2px #8a051099",
            }}
          >
            {slides[current].subtitle}
          </span>
          <h1
            style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: "3.8rem",
              margin: "0 0 12px -2.5px",
              letterSpacing: "0.8px",
              textShadow:
                "0 9px 36px #000c,0 3.5px 12px #c00d,0 0 65px #1a1b, 0 3px 0 #13011644",
              lineHeight: "1.04",
              filter: "drop-shadow(0 8px 32px #0008)",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {slides[current].title}
          </h1>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.22rem",
              fontWeight: 400,
              margin: "0 0 23px 2.5px",
              lineHeight: "1.48",
              maxWidth: 410,
              textShadow: "0 2.5px 7.5px #0009, 0 1.5px 1.5px #200e",
            }}
          >
            {slides[current].description}
          </div>
          <button
            className="btn btn-large"
            style={{
              display: "inline-block",
              fontSize: "1.17rem",
              fontWeight: 800,
              background:
                "linear-gradient(90deg,var(--accent-color) 79%, #ea333d 100%)",
              color: "var(--accent-contrast)",
              border: "none",
              borderRadius: 8,
              padding: "14px 41px 14px 28px",
              marginTop: 8,
              boxShadow: "0 4px 22px 0 rgba(229,9,20,0.20), 0 2px 14px #0603",
              letterSpacing: "0.85px",
              textShadow: "0 0.5px 3px #b10824bb",
              cursor: "pointer",
              outline: "none",
              filter: "brightness(1.09)",
              transition: "background 0.15s, filter 0.15s",
              borderBottom: "2.3px solid #980315",
              lineHeight: 1.23,
            }}
            tabIndex={0}
          >
            {slides[current].cta}
          </button>
        </div>
      </div>

      {/* Left/Right arrow controls */}
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

      {/* Indicator dots — precise focus ring, shadow, and spacing */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 38,
          transform: "translateX(-50%)",
          display: "flex",
          gap: 19,
          zIndex: 29,
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
                : "rgba(193,17,25,0.49)",
              borderRadius: "50%",
              border: 0,
              margin: 0,
              outline: idx === current ? "2.5px solid #fff" : "none",
              boxShadow: idx === current
                ? "0 0 16px 1.5px var(--accent-color), 0 1.3px 5.7px 2px #fff8"
                : "0 0px 4px 1.1px #0008",
              opacity: idx === current ? 1 : 0.65,
              cursor: "pointer",
              transition:
                "background 0.15s, box-shadow 0.16s, outline 0.11s, opacity 0.11s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default BannerSlider;
