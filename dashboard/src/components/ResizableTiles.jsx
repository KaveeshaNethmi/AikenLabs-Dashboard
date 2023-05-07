import React, { useState } from 'react';
import styles from "../styles/ResizableTile.module.css"

const Tile = ({ title, content, onDelete }) => {
  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleDotsClick = () => {
    setShowDelete(!showDelete);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-lg font-medium">{title}</h2>
        <div
          className={styles.dots}
          onClick={handleDotsClick}
        >
          <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-1"></span>
          <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-1"></span>
          <span className="inline-block w-2 h-2 bg-gray-500 rounded-full"></span>
        </div>
        {showDelete && (
          <div
            className="delete-button cursor-pointer text-red-500 hover:text-red-600"
            onClick={handleDeleteClick}
          >
            Delete
          </div>
        )}
      </div>
      <div className="text-gray-500">{content}</div>
    </div>
  );
};

const ResizableTiles = () => {
  const [tiles, setTiles] = useState([
    {
      id: 1,
      title: 'Tile 1',
      content: 'Content for Tile 1',
    },
    {
      id: 2,
      title: 'Tile 2',
      content: 'Content for Tile 2',
    },
    {
      id: 3,
      title: 'Tile 3',
      content: 'Content for Tile 3',
    },
    {
      id: 4,
      title: 'Tile 4',
      content: 'Content for Tile 4',
    },
  ]);

  const handleTileDelete = (id) => {
    setTiles((prevTiles) => prevTiles.filter((tile) => tile.id !== id));
  };

  return (
    <div className="container mx-auto pt-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {tiles.map((tile) => (
          <Tile
            key={tile.id}
            title={tile.title}
            content={tile.content}
            onDelete={() => handleTileDelete(tile.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResizableTiles;
