const BookingStepCard = (props) => {
  const { icon, title, num, isactive = false } = props;
  return (
    <>
      <div
        {...props}
        className={`w-full flex justify-between items-center border-b-2 ${
          isactive ? "border-black hover:bg-gray-300" : "border-[#e5e5e5]"
        } py-8 px-4 cursor-pointer transition-all select-none`}
      >
        <div className="flex items-center gap-6">
          <span
            className={`${
              isactive ? "text-white bg-[#024273]" : "bg-[#F0FBF7]"
            } p-4 rounded-full text-2xl`}
          >
            {icon}
          </span>
          <p className="font-bold text-xl">{title}</p>
        </div>
        <p className="font-bold text-3xl">{num}</p>
      </div>
    </>
  );
};

export default BookingStepCard;
