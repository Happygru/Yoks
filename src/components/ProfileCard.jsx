/* eslint-disable @next/next/no-img-element */
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const ProfileCard = (props) => {
  const { img, name, addr } = props;
  return (
    <div className="bg-white shadow-md rounded-md p-5 w-full">
      <img className="w-full" alt="" src={`image/teams/${img}`} />
      <p className="text-xl text-[var(--text-color)] text-center mt-3 font-semibold uppercase">
        {name}
      </p>
      <div className="w-full border-t border-gray-300 divide-y divide-gray-300 mt-3">
        <div className="flex items-center justify-between py-3">
          <p className="font-semibold">Email</p>
          <p>{addr}</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <p className="font-semibold">Follow</p>
          <div className="flex text-[var(--text-color)] gap-4">
            <FaFacebookF />
            <FaTwitter />
            <BsInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
