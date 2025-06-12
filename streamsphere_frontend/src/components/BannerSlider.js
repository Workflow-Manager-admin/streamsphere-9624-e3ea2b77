import React, { useState, useEffect, useRef } from "react";

// Dummy banners configuration and placeholder data
const BANNERS = [
  {
    image: "https://via.placeholder.com/800x350?text=Banner+1",
    title: "Big Cinematic Adventure",
    description: "Experience the thrill of a new blockbuster. Only on StreamSphere.",
  },
  {
    image: "https://via.placeholder.com/800x350?text=Banner+2",
    title: "Exciting Originals",
    description: "Dive into original stories and unforgettable performances.",
  },
  {
    image: "https://via.placeholder.com/800x350?text=Banner+3",
    title: "Must-See Thrillers",
    description: "Stay on the edge with gripping suspense and drama.",
  },
];

// PUBLIC_INTERFACE
function BannerSlider() {
  /**
   * BannerSlider displays a carousel of banners (with image, title, description)
   * supporting cinematic dark theme, auto-cycling, and manual navigation.
   */
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const transitionDuration = 520;

  useEffect(() => {
    // Auto-cycle every 3.5 seconds
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % BANNERS.length),
      3500
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Manual navigation
  const goTo = (i) => {
    clearTimeout(timeoutRef.current);
    setCurrent(i);
  };
  const prev = () => goTo((current - 1 + BANNERS.length) % BANNERS.length);
  const next = () => goTo((current + 1) % BANNERS.length);

  return (
    <section
      className="banner-slider"
      style={{
        width: "100%",
        maxWidth: 900,
        margin: "0 auto 48px auto",
        minHeight: 350,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 800,
          height: 350,
          borderRadius: 18,
          overflow: "hidden",
          background: "linear-gradient(90deg, var(--accent-color) 5%, var(--primary-color) 99%)",
          boxShadow: "0 14px 50px 0 rgba(229,9,20,0.18)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          transition: `box-shadow .32s cubic-bezier(.33,1,.68,1)`,
        }}
      >
        {/* Slide Transition: Transition all inner sections */}
        {BANNERS.map((banner, idx) => (
          <div
            key={idx}
            className="slider-banner"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: idx === current ? 1 : 0,
              zIndex: idx === current ? 2 : 1,
              transition: `opacity ${transitionDuration}ms cubic-bezier(.45,.87,0,1)`,
              display: "flex",
              alignItems: "stretch",
              background: "rgba(24, 24, 24, 0.76)",
              pointerEvents: idx === current ? "auto" : "none",
            }}
            aria-hidden={idx !== current}
          >
            <img
              src={banner.image}
              alt={banner.title}
              style={{
                minWidth: 360,
                width: 360,
                height: "100%",
                objectFit: "cover",
                borderRight: "2px solid var(--accent-color)",
                filter: "brightness(0.9)",
                background: "#202020",
                display: "block",
              }}
            />
            <div
              style={{
                padding: "48px 44px 36px 44px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "calc(100% - 360px)",
                color: "var(--accent-contrast)",
                background: "linear-gradient(94deg, rgba(24,24,24,0.92) 80%, transparent 100%)",
              }}
            >
              <span
                style={{
                  color: "var(--accent-color)",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  letterSpacing: "0.7px",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                FEATURED
              </span>
              <h2
                style={{
                  color: "#fff",
                  margin: "2px 0 16px 0",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  textShadow: "0 4px 22px rgba(229,9,20,0.11)",
                }}
              >
                {banner.title}
              </h2>
              <div
                style={{
                  color: "var(--text-secondary)",
                  marginTop: 0,
                  fontSize: "1.17rem",
                  lineHeight: 1.4,
                  maxWidth: 340,
                }}
              >
                {banner.description}
              </div>
            </div>
          </div>
        ))}
        {/* Left / Right Navigation */}
        <button
          aria-label="Previous banner"
          onClick={prev}
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(20,20,24,0.85)",
            border: "none",
            borderRadius: "36px",
            width: 44,
            height: 44,
            color: "var(--accent-contrast)",
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            zIndex: 99,
            cursor: "pointer",
            outline: "none",
            boxShadow: "0 2px 7px 0 rgba(0,0,0,0.13)",
            transition: "background .16s"
          }}
        >
          <span style={{ color: "var(--accent-color)", fontWeight: 700 }}>{'‹'}</span>
        </button>
        <button
          aria-label="Next banner"
          onClick={next}
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(20,20,24,0.85)",
            border: "none",
            borderRadius: "36px",
            width: 44,
            height: 44,
            color: "var(--accent-contrast)",
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            zIndex: 99,
            cursor: "pointer",
            outline: "none",
            boxShadow: "0 2px 7px 0 rgba(0,0,0,0.13)",
            transition: "background .16s"
          }}
        >
          <span style={{ color: "var(--accent-color)", fontWeight: 700 }}>{'›'}</span>
        </button>
        {/* Dots Navigation */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 18,
            display: "flex",
            justifyContent: "center",
            gap: 12,
            zIndex: 32,
          }}
        >
          {BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show banner ${i + 1}`}
              style={{
                width: 12,
                height: 12,
                background: i === current ? "var(--accent-color)" : "rgba(255,255,255,0.28)",
                borderRadius: "50%",
                border: "none",
                margin: "0 2px",
                outline: "none",
                transition: "background .22s",
                cursor: "pointer",
              }}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BannerSlider;
