import { Link } from "react-router-dom";

const DashboardMenuItem = (props) => {
  const { isactive = false, icon, title, href } = props;

  return (
    <Link
      {...props}
      to={`${href}`}
      className={`font-text text-white flex gap-3 items-center p-3 ${
        isactive ? "bg-[rgba(237,139,0,0.9)]" : ""
      } transition-all hover:bg-[rgba(237,139,0,0.9)] rounded-md w-full`}
    >
      <span className="text-2xl">{icon}</span>
      <p>{title}</p>
    </Link>
  );
};

export default DashboardMenuItem;
