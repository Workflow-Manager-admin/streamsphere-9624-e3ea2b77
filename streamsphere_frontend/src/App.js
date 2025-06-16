import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main entry for the StreamSphere app.
   * Delegates layout to MainContainer, ensuring global style and context.
   */
  return (
    <div className="app">
      <MainContainer />
    </div>
  );
}

export default App;