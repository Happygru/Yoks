const ValuesCard = (props) => {
  const { title, text, icon } = props;
  return (
    <div className="p-8 bg-white rounded-md max-w-[370px] w-full flex flex-col gap-4">
      <img src={`image/home/${icon}`} alt="safetyFirst" className="w-9 h-9" />
      <p className="text-[var(--text-color)] font-bold text-xl">{title}</p>
      <p className="text-[var(--text-color)] text-xl font-text">{text}</p>
    </div>
  );
};

export default ValuesCard;
