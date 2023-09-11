const SignUp = () => {
  return (
    <div className="py-24 max-w-[1280px] w-[90%] m-auto">
      <div className="w-full grid grid-cols-2">
        <div className="col-span-1 text-center">
          <h1 className="text-4xl font-bold">Create Account</h1>
          <p className="text-md py-4 font-text">Signup for an Account</p>
          <div className="mt-4 w-full grid grid-cols-2">
            <div>
              <input type="text" className="y_input" />
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default SignUp;
