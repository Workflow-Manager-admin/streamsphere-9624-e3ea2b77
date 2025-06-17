import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import SectionList from './SectionList';

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * MainContainer is the top-level layout for StreamSphere's home page, 
   * styled and structured to closely match the latest design reference. 
   * This version features a fixed nav, contained hero area (carousel), and visually separated 
   * horizontal sections for trending/recommended/new content.
   */
  return (
    <>
      <Navbar />
      <main
        style={{
          marginTop: 72,
          minHeight: '100vh',
          background: 'var(--background-main)',
          color: 'var(--text-main)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 40,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 980,
            margin: '0 auto',
            boxSizing: 'border-box',
            padding: '0 16px',
            // Aligns with new design visual margins
          }}
        >
          <Carousel />
        </div>
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 48,
            width: '100%',
            maxWidth: 980,
            margin: '0 auto',
            boxSizing: 'border-box',
            padding: '0 12px 0 12px',
            position: 'relative',
          }}
        >
          <SectionList title="Trending Now" />
          <SectionList title="Recommended For You" />
          <SectionList title="New Releases" />
        </div>
      </main>
    </>
  );
}

export default MainContainer;
