const CountNumberCard = ({ number, symbol, text }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <p className="text-[50px] text-[#39c0c3] font-semibold">
        {number} {symbol}
      </p>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default CountNumberCard;
