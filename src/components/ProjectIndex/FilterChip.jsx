"use client";

import { AnimatePresence, motion } from "framer-motion";

const FilterChip = ({ selected, label, onClick }) => {
  return (
    <motion.button
      layout
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-3xl border-[1px] overflow-hidden relative z-10 ${
        selected
          ? " text-f-inverse border-f-inverse/20"
          : " border-f-inverse/20 hover:border-f-inverse"
      }`}
    >
      <AnimatePresence>
        {selected && (
          <motion.div
            layoutId="chip-bg"
            className="absolute inset-0 bg-accent rounded-3xl z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10 text-sm font-bold">{label}</span>
    </motion.button>
  );
};

export default FilterChip;
