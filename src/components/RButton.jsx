const RButton = (props) => {
  const {
    isfullradius = false,
    isradius = false,
    children,
    istransparent = false,
  } = props;
  return (
    <div
      {...props}
      className={` ${isradius ? "rounded-[6px]" : "rounded-none"} ${
        isfullradius ? "!rounded-full" : ""
      } ${
        istransparent
          ? "bg-[rgba(2,66,115,0.18)] hover:bg-[rgba(2,66,115,0.28)]"
          : "bg-[#024273] hover:bg-[rgba(2,66,115,0.9)]"
      } w-max  px-4 py-3 text-white font-semibold cursor-pointer transition-all hover:transition-all select-none text-[18px] `}
    >
      {children}
    </div>
  );
};

export default RButton;
