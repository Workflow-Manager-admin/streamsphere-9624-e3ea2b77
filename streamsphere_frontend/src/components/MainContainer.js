import React from 'react';

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * MainContainer is the top-level layout for StreamSphere's home page.
   * Structure:
   * - Fixed top navbar with logo, search, and user avatar
   * - Main area with carousel placeholder
   * - Sections: Trending Now, Recommended, New Releases (all horizontally scrollable stubs)
   * - All section layouts use StreamSphere dark theme and palette
   */
  return (
    <>
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="logo">
            <span className="logo-symbol" role="img" aria-label="StreamSphere logo">🎬</span>
            StreamSphere
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <input
              className="search-bar"
              style={{
                background: 'var(--background-secondary)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-color)',
                borderRadius: 4,
                padding: '6px 12px',
                outline: 'none'
              }}
              type="search"
              placeholder="Search movies, shows..."
              aria-label="Search content"
            />
            <span
              className="avatar"
              style={{
                width: 36,
                height: 36,
                background: 'var(--accent-color)',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                fontSize: 18,
                color: 'var(--accent-contrast)'
              }}
            >
              SS
            </span>
          </div>
        </div>
      </nav>

      <main style={{ marginTop: 88, minHeight: '100vh', background: 'var(--background-main)', color: 'var(--text-main)' }}>
        <section
          className="carousel"
          style={{
            width: '100%',
            background: 'linear-gradient(to right, var(--accent-color) 6%, transparent 100%)',
            minHeight: 320,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 48,
          }}
        >
          <div
            style={{
              color: 'var(--accent-contrast)',
              background: 'rgba(24,24,24,0.84)',
              padding: '32px 56px',
              borderRadius: 16,
              fontSize: '2.25rem',
              fontWeight: 600,
              boxShadow: '0 8px 24px 0 rgba(229,9,20,0.12)',
              letterSpacing: 1.1,
              maxWidth: 540,
              textAlign: 'center',
            }}
          >
            Featured Carousel Placeholder
          </div>
        </section>

        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          {/* Trending Now */}
          <SectionWithHorizontalList title="Trending Now" />

          {/* Recommended For You */}
          <SectionWithHorizontalList title="Recommended For You" />

          {/* New Releases */}
          <SectionWithHorizontalList title="New Releases" />
        </div>
      </main>
    </>
  );
}

// Simple placeholder horizontal scroll list used for each section
function SectionWithHorizontalList({ title }) {
  /* Array of stub poster cards */
  const items = Array.from({ length: 8 });
  return (
    <section style={{ width: '100%' }}>
      <h2 style={{
        color: 'var(--accent-color)',
        fontWeight: 600,
        fontSize: '1.35rem',
        margin: 0,
        marginBottom: 16,
        letterSpacing: 1.1
      }}>{title}</h2>
      <div
        style={{
          display: 'flex',
          gap: 18,
          overflowX: 'auto',
          paddingBottom: 6,
          scrollbarColor: "var(--accent-color) var(--background-secondary)"
        }}
      >
        {items.map((_, idx) => (
          <div
            key={idx}
            style={{
              minWidth: 130,
              background: 'var(--background-secondary)',
              height: 188,
              borderRadius: 8,
              border: '1.5px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              fontSize: 16,
              flexDirection: 'column'
            }}
          >
            <span
              style={{
                background: 'rgba(229,9,20,0.19)',
                borderRadius: '60%',
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                marginBottom: 12
              }}
            >🎥</span>
            <div style={{ fontWeight: 500 }}>Poster {idx + 1}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainContainer;
