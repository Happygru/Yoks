import { useState } from "react";
import { TextField } from "@mui/material";
import { validatePassword } from "../../utils/constants";
import { toast_options } from "../../utils/constants";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "../../redux/type";
import { savePassword } from "../../redux/actions/myaccountAction";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const [oldpassword, setOldpassword] = useState("");
  const [currentpassword, setCurrentpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const updatePassword = () => {
    if (currentpassword.length < 1 && confirmpassword.length < 1) {
      toast.warn("Please input your password", toast_options);
      return;
    }

    if (currentpassword !== confirmpassword) {
      toast.warn("Don't match your passwords", toast_options);
      return;
    }

    if (!validatePassword(currentpassword)) {
      toast.warn("Incorrect your password", toast_options);
    }

    const formData = new FormData();
    formData.append("current_password", oldpassword);
    formData.append("new_password", currentpassword);

    dispatch({ type: SET_LOADING, payload: true });
    savePassword(dispatch, formData);
  };

  return (
    <>
      <div className="flex flex-col w-full gap-2 py-6">
        <p className="text-xl font-bold">Change Password</p>
        <p className="text-sm font-text">Dashboard - Edit Profile</p>
      </div>
      <div className="grid w-full grid-cols-1 bg-white lg:grid-cols-2 ">
        <div className="col-span-1">
          <div className="w-full px-8 py-12 rounded-sm shadow-sm">
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-1">
                <TextField
                  fullWidth
                  label="Old Password"
                  variant="outlined"
                  value={oldpassword}
                  type="password"
                  onChange={(e) => setOldpassword(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <TextField
                  fullWidth
                  error={
                    (currentpassword !== confirmpassword ||
                      !validatePassword(currentpassword)) &&
                    currentpassword.length > 0
                      ? true
                      : false
                  }
                  label="Current Password"
                  variant="outlined"
                  value={currentpassword}
                  type="password"
                  onChange={(e) => setCurrentpassword(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <TextField
                  error={
                    (currentpassword !== confirmpassword ||
                      !validatePassword(confirmpassword)) &&
                    confirmpassword.length > 0
                      ? true
                      : false
                  }
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  value={confirmpassword}
                  type="password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </div>
              <div className="col-span-1">
                <RButton
                  isradius={true}
                  style={{ backgroundColor: "rgba(237,139,0,0.9)" }}
                  onClick={updatePassword}
                >
                  <span className="flex items-center justify-center w-full gap-2 px-10 font-normal">
                    Update Password
                    <BsArrowUpRight className="font-bold" />
                  </span>
                </RButton>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full px-8 py-12 rounded-sm shadow-sm">
            <b className="text-lg">Password must:</b>
            <ul>
              <li>🚀 Be between 9 and 64 characters</li>
              <li>
                <p>🚀 Include at least two of the following</p>
                <ul className="pl-6">
                  <li>- An uppercase character</li>
                  <li>- A lowercase character</li>
                  <li>- A number</li>
                  <li>- A special character</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
