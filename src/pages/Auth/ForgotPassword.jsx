import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import RButton from "../../components/RButton";
import { BsArrowUpRight } from "react-icons/bs";

const ForgotPassword = () => {
  return (
    <>
      <div className="w-full py-36 bg-center bg-cover">
        <Card className="py-12 px-6 w-[400px] m-auto text-center">
          <h1 className="text-4xl font-bold">Forgot Password</h1>
          <p className="text-md py-4 font-text">
            Enter email to reset password
          </p>
          <div className="mt-8 flex flex-col gap-10">
            <input
              type="text"
              className="y_input font-text"
              placeholder="Email"
            />
          </div>
          <div className="mt-16">
            <RButton isradius={true} isfullwidth={true}>
              <Link
                className="flex w-full justify-center items-center gap-2 px-10"
                to="/reset_password"
              >
                Send
                <BsArrowUpRight className="font-bold" />
              </Link>
            </RButton>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ForgotPassword;
