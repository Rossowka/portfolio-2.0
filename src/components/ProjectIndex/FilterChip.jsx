"use client";

const FilterChip = ({ selected, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        invisible px-5 py-2 rounded-lg border-[1px] overflow-hidden relative z-10
        transition-all duration-200
        ${
          selected
            ? "text-f-inverse border-f-inverse/20 bg-reddishBrown"
            : "opacity-50 hover:opacity-100"
        }
      `}
    >
      <span className="relative z-10 text-base">{label}</span>
    </button>
  );
};

export default FilterChip;
