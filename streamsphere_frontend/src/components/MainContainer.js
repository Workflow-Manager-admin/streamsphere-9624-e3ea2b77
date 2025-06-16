import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import SectionList from './SectionList';

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * MainContainer is the top-level layout for StreamSphere's home page.
   * Now composed using the key feature components: Navbar, Carousel, SectionList.
   * - Navbar at the top (includes logo, SearchBar, ProfileIcon).
   * - Carousel for featured content.
   * - SectionList for: Trending Now, Recommended For You, New Releases.
   * All layouts use StreamSphere's dark theme and style palette.
   */
  return (
    <>
      <Navbar />
      <main style={{ marginTop: 88, minHeight: '100vh', background: 'var(--background-main)', color: 'var(--text-main)' }}>
        <Carousel />
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          <SectionList title="Trending Now" />
          <SectionList title="Recommended For You" />
          <SectionList title="New Releases" />
        </div>
      </main>
    </>
  );
}

export default MainContainer;
