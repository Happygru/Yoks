const BreadCrumb = (props) => {
  const { children, title } = props;
  return (
    <div className="w-full bg-[var(--main-color2)] py-8 text-white">
      <div className="max-w-[1280px] w-[90%] m-auto">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="text-xs">{children}</div>
      </div>
    </div>
  );
};

export default BreadCrumb;
