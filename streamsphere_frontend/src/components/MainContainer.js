import React from 'react';
import Navbar from './Navbar';
import SectionList from './SectionList';

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * MainContainer lays out the overall StreamSphere home page.
   * Contains Navbar and section rails for content.
   */
  return (
    <>
      <Navbar />

      {/* Section rails */}
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 64,
          marginTop: 32,
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
