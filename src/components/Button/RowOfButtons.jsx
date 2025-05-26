"use client";

import { staggerContainer } from "@/utils/animations";
import { motion } from "motion/react";

const RowOfButtons = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="mb-10 mt-16 flex flex-col md:flex-row gap-4"
    >
      {children}
    </motion.div>
  );
};

export default RowOfButtons;
