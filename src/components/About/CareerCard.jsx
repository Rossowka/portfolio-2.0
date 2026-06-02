"use client";

const CareerCard = ({ stat }) => {
  return (
    <div className="flex-1 flex flex-col gap-5">
      <p className="text-[42px] leading-tight tracking-tight font-semibold">{stat.number}</p>
      <p className="text-[26px] leading-normal text-f-inverse/60 text-balance">{stat.text}</p>
    </div>
  );
};

export default CareerCard;
