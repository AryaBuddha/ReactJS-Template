import React from "react";

import { motion } from "framer-motion";

const TechLogo = ({ name, logo, url, position, height, left }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <motion.img
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: position }}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        src={logo}
        alt={name}
        className={`h-${height} ml-${left}`}
      />
    </a>
  );
};

export default TechLogo;
