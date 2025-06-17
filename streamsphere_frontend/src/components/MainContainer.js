import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import SectionList from './SectionList';

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * MainContainer is the top-level layout for StreamSphere's home page.
   * Composed using the key feature components: Navbar, Carousel, and SectionList.
   * Visual update: prominent hero/banner with cinematic rails (section rails) below.
   */
  return (
    <>
      <Navbar />
      {/* Banner/Hero Section */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          background: 'linear-gradient(90deg, var(--accent-color) 0%, var(--background-main) 75%)',
          minHeight: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 72,
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 12,
            padding: '48px 24px 16px 24px',
          }}
        >
          <span
            style={{
              color: 'var(--accent-contrast)',
              background: 'var(--accent-color)',
              fontWeight: 600,
              fontSize: '1.15rem',
              padding: '5px 18px',
              borderRadius: 24,
              letterSpacing: 1.5,
              boxShadow: '0 2px 16px 0 rgba(229,9,20,0.17)',
              marginBottom: 4,
              alignSelf: 'flex-start'
            }}
          >
            Featured
          </span>
          <h1
            style={{
              color: 'var(--accent-contrast)',
              fontSize: '2.6rem',
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: 1.2,
              textShadow: '0 6px 22px rgba(0,0,0,0.10)'
            }}
          >
            Welcome to StreamSphere
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.09rem',
              margin: '8px 0 0 0',
              maxWidth: 410,
            }}
          >
            Your home for streaming movies, TV shows, and web series. Browse trending favorites & discover personalized picks.
          </p>
          <button
            className="btn btn-large"
            style={{
              marginTop: 24,
              fontSize: '1.11rem',
              fontWeight: 600,
              background: 'var(--accent-color)',
              color: 'var(--accent-contrast)',
              border: 'none',
              borderRadius: 5,
              padding: '13px 36px',
              boxShadow: '0 2px 14px 0 rgba(229,9,20,0.12)',
              cursor: 'pointer'
            }}
          >
            Start Watching
          </button>
        </div>
        {/* Decorative film rail effect (left edge rail mark) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            top: '25%',
            height: 48,
            width: 16,
            background: 'var(--accent-color)',
            opacity: 0.18,
            borderRadius: '0 12px 12px 0',
            boxShadow: '6px 0 28px 5px var(--accent-color)',
            zIndex: 1,
          }}
        />
      </section>

      {/* Carousel for featured content (simulating a large billboard visual below hero) */}
      <Carousel />
      {/* Section rails */}
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 64,
          marginTop: 16,
        }}
      >
        <div style={{
          borderLeft: '6px solid var(--accent-color)',
          background: 'rgba(24,24,24,0.82)',
          borderRadius: '8px 16px 16px 8px',
          boxShadow: '0 2px 28px 0 rgba(229,9,20,0.07)',
          padding: '20px 0 20px 12px',
        }}>
          <SectionList title="Trending Now" />
        </div>
        <div style={{
          borderLeft: '6px solid var(--accent-color)',
          background: 'rgba(24,24,24,0.89)',
          borderRadius: '8px 16px 16px 8px',
          boxShadow: '0 2px 26px 0 rgba(229,9,20,0.08)',
          padding: '20px 0 20px 12px',
        }}>
          <SectionList title="Recommended For You" />
        </div>
        <div style={{
          borderLeft: '6px solid var(--accent-color)',
          background: 'rgba(24,24,24,0.97)',
          borderRadius: '8px 16px 16px 8px',
          boxShadow: '0 2px 24px 0 rgba(229,9,20,0.09)',
          padding: '20px 0 20px 12px',
        }}>
          <SectionList title="New Releases" />
        </div>
      </div>
    </>
  );
}

export default MainContainer;
