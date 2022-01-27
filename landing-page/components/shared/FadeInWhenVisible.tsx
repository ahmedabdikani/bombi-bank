import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
  },
};

const FadeInWhenVisible: React.FC = ({ children }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      // animate='visible'
      transition={{ duration: 1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
