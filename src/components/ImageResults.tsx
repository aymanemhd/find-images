import React from 'react';

interface Image {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface ImageResultsProps {
  images: Image[];
}

const ImageResults: React.FC<ImageResultsProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {images.map((image) => (
        <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
      ))}
    </div>
  );
};

export default ImageResults;
