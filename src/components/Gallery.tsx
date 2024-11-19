import React from 'react';
import Masonry from 'react-masonry-css';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const images = [
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/800x600",
  "https://via.placeholder.com/400x600",
  "https://via.placeholder.com/600x600",
  "https://via.placeholder.com/1200x800",
  "https://via.placeholder.com/400x500",
  "https://via.placeholder.com/400x200",
  "https://via.placeholder.com/500x500",
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const Gallery = () => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((src, index) => (
        <MotionBox
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          mb={4}
        >
          <Image src={src} alt={`Gallery image ${index + 1}`} borderRadius="md" />
        </MotionBox>
      ))}
    </Masonry>
  );
};

export default Gallery;
