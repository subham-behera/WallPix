import React, { useState } from 'react';
import WallpaperCard from './WallpaperCard';

const WallpaperGallery = ({ wallpapers }) => {
  const [downloadCounts, setDownloadCounts] = useState(Array(wallpapers.length).fill(0));
  const [searchQuery, setSearchQuery] = useState('');

  const handleDownload = (index) => {
    const newDownloadCounts = [...downloadCounts];
    newDownloadCounts[index] += 1;
    setDownloadCounts(newDownloadCounts);
  };

  const totalDownloads = downloadCounts.reduce((sum, count) => sum + count, 0);

  const filteredWallpapers = wallpapers.filter(wallpaper =>
    wallpaper.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-bold text-white mb-1 sm:mb-0">Wallpaper Gallery</h1>
        <input
          type="text"
          placeholder="Search the title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/3 px-2 py-1 rounded border border-gray-300 mb-1 sm:mb-0"
        />
        <div className="text-white text-base">
          Total Downloads: {totalDownloads}
        </div>
      </nav>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWallpapers.map((wallpaper, index) => (
          <WallpaperCard
            key={index}
            wallpaper={wallpaper}
            onDownload={() => handleDownload(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WallpaperGallery;
