import React from 'react';
import WallpaperGallery from './components/WallpaperGallery';
import wallpapers from './components/wallpapers';

const App = () => {
  return (
    <div className="App">
      <WallpaperGallery wallpapers={wallpapers} />
    </div>
  );
};

export default App;
