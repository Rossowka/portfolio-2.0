const FilterChip = ({ selected, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-3xl border-[1px] transition-colors duration-200 text-sm font-bold ${
        selected
          ? "bg-accent text-f-inverse border-f-inverse/20"
          : "bg-transparent border-f-inverse/20 hover:border-f-inverse"
      } overflow-hidden `}
    >
      {label}
    </button>
  );
};

export default FilterChip;
