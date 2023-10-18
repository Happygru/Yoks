const AwardsCard = ({ year, title, subtitle, status }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="rounded-full w-max p-1 px-4 pr-6 text-sm font-semibold bg-[#FDEEEC]">
        {year}
      </div>
      <h1 className="text-2xl font-semibold text-[var(--text-color)]">
        {title}
      </h1>
      <p className="text-[#E95440]">{subtitle}</p>
      <p className="text-[15px] text-[var(--text-color)]">{status}</p>
    </div>
  );
};

export default AwardsCard;
