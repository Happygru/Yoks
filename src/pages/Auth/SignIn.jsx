import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";

const SignIn = () => {
  return (
    <>
      <div
        className="w-full py-36 bg-center bg-cover"
        style={{ backgroundImage: "url(image/auth/background.png)" }}
      >
        <Card className="py-12 px-6 w-[400px] m-auto text-center">
          <h1 className="text-4xl font-bold">Sign In</h1>
          <p className="text-md py-4 font-text">
            Sign in with your account details
          </p>
          <div className="mt-8 flex flex-col gap-10">
            <input
              type="text"
              className="y_input font-text"
              placeholder="Email"
            />
            <input
              type="password"
              className="y_input font-text"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between w-full mt-4">
            <div className="flex gap-3 cursor-pointer items-center">
              <input
                type="checkbox"
                id="remember_account"
                className="remember_check cursor-pointer"
              />
              <label
                className="font-text select-none cursor-pointer"
                htmlFor="remember_account"
              >
                Remember me
              </label>
            </div>
            <Link to="/forgot_password">Forgot your password?</Link>
          </div>
          <div className="mt-16">
            <RButton isradius={true} isfullwidth={true}>
              <span className="flex w-full justify-center items-center gap-2 px-10">
                Sign In <BsArrowUpRight className="font-bold" />
              </span>
            </RButton>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SignIn;
