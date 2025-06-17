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

  // SVG arrow icons for navigation
  const Arrow = ({ dir, onClick, label }) => (
    <button
      aria-label={label}
      tabIndex={0}
      style={{
        position: "absolute",
        top: "50%",
        [dir]: 46,
        transform: "translateY(-50%)",
        background: "rgba(12,12,12,0.47)",
        border: "none",
        borderRadius: "50%",
        width: 52,
        height: 52,
        cursor: "pointer",
        zIndex: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.18s",
        fontSize: 0,
        boxShadow: "0 1.5px 18px 0 #000a",
        outline: "none",
      }}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? onClick() : null)}
    >
      {/* Simple left/right arrow SVG */}
      {dir === "left" ? (
        <svg width="28" height="28" fill="none">
          <path
            d="M18 23L9.75 14L18 5"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="28" height="28" fill="none">
          <path
            d="M10 5L18.25 14L10 23"
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
        marginTop: 74,
        width: "100%",
        minHeight: 490,
        maxHeight: 650,
        background: "#151515",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.44s cubic-bezier(0.22, 0.68, 0.44, 1)",
        boxShadow: "0 16px 44px 0 #000b, 0 2px 0 #2829",
        borderBottom: "3.7px solid var(--accent-color)",
        borderTop: "0.5px solid #222",
      }}
      aria-label="featured carousel"
    >
      {/* Background "cinematic" vertical gradient (dark to transparent bottom) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 3,
          background:
            "linear-gradient(180deg, #181818 0%, rgba(24,24,24,0.47) 35%, rgba(30,30,30,0.12) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Very subtle bottom-shadow vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 90,
          zIndex: 4,
          background:
            "linear-gradient(0deg,rgba(28,28,28,0.98) 2%,rgba(28,28,28,0.48) 48%,rgba(28,28,28,0) 95%)",
          pointerEvents: "none",
        }}
      />
      {/* Bright left vertical accent edge (tighter Netflix style) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 9,
          background: "var(--accent-color)",
          opacity: 0.24,
          borderRadius: "0 22px 18px 0",
          filter: "blur(11px)",
          boxShadow: "8px 0 46px 1px var(--accent-color)",
          zIndex: 5,
        }}
      />
      {/* Slide image/full hero background */}
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
            minHeight: 480,
            maxHeight: 640,
            objectFit: "cover",
            objectPosition: "52% 40%",
            filter:
              "brightness(0.59) contrast(1.09) saturate(1.20) blur(0.2px)",
            transition: "filter 0.13s",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
          }}
        />
        {/* Netflix-style horizontal fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, #191919 10%, rgba(24,24,24,0.88) 22%, rgba(24,24,24, 0.13) 56%, rgba(24,24,24, 0.82) 98%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Main content row: precise vertical/horizontal Netflix-style layout */}
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 0,
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "0 0 0 68px",
          maxWidth: 1330,
          minHeight: 440,
          height: "calc(51vw + 68px)",
          justifyContent: "flex-start",
        }}
      >
        {/* Hero text column — Netflix style */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 520,
            minWidth: 320,
            padding: "0 0 72px 0",
            gap: 0,
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              color: "var(--accent-color)",
              fontWeight: 700,
              fontSize: "1.25rem",
              letterSpacing: "2.6px",
              background: "rgba(14,13,13,0.18)",
              textTransform: "uppercase",
              borderRadius: 18,
              padding: "7px 28px 7px 4px",
              marginBottom: 13,
              boxShadow: "0 2px 12px 0 rgba(229,9,20,0.21)",
              textShadow:
                "0 1.2px 14px #ad0c1266, 0 0.5px 2.3px #221d",
            }}
          >
            {slides[current].subtitle}
          </span>
          <h1
            style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: "3.85rem",
              margin: "0 0 12px -2.5px",
              letterSpacing: "0.7px",
              textShadow:
                "0 9px 36px #000b,0 2.5px 6px #c00d,0 0 65px #090a, 0 3px 0 #1301164c",
              lineHeight: "1.05",
              filter: "drop-shadow(0 8px 26px #0008)",
            }}
          >
            {slides[current].title}
          </h1>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.33rem",
              fontWeight: 400,
              margin: "0 0 22px 2.5px",
              maxWidth: 430,
              lineHeight: "1.5",
              textShadow: "0 2px 7px #000a",
            }}
          >
            {slides[current].description}
          </div>
          <button
            className="btn btn-large"
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              background:
                "linear-gradient(90deg,var(--accent-color) 82%, #ea333d 100%)",
              color: "var(--accent-contrast)",
              border: "none",
              borderRadius: 7,
              padding: "15px 48px 14px 31px",
              marginTop: 6,
              boxShadow: "0 4px 24px 0 rgba(229,9,20,0.18), 0 2px 14px #0009",
              letterSpacing: "0.9px",
              textShadow: "0 0.5px 3px #b10824bb",
              cursor: "pointer",
              outline: "none",
              filter: "brightness(1.07)",
              transition: "background 0.17s, filter 0.17s",
              borderBottom: "2px solid #930913",
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
          bottom: 46,
          transform: "translateX(-50%)",
          display: "flex",
          gap: 23,
          zIndex: 15,
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
                : "#c11119a9",
              borderRadius: "50%",
              border: 0,
              margin: 0,
              outline: idx === current ? "3px solid #fff" : "none",
              boxShadow: idx === current
                ? "0 0 18px 2px var(--accent-color), 0 1px 6px 2.5px #fff7"
                : "0 0px 5px 1.5px #0008",
              opacity: idx === current ? 0.99 : 0.7,
              cursor: "pointer",
              transition: "background 0.19s, outline 0.13s, box-shadow 0.17s, opacity 0.11s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default BannerSlider;
