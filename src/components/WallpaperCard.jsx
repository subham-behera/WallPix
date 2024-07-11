import React from 'react';

const WallpaperCard = ({ wallpaper, onDownload }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <a href={wallpaper.image} target="_blank" rel="noopener noreferrer">
        <img className="w-full h-48 object-cover" src={wallpaper.image} alt="Wallpaper" />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{wallpaper.title}</div>
        <p className="text-gray-600 text-base mb-2">
          {wallpaper.description}
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Artist: {wallpaper.artist}
        </p>
        <a
          href={wallpaper.downloadLink}
          download
          onClick={onDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block transition-colors duration-300"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default WallpaperCard;
