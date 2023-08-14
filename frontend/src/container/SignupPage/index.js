import { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import { Header, Footer } from "../../components/Organism";
import { InputField, Button } from "../../components/Molecules";
import {
  GrGoogle,
  GrInstagram,
  GrLinkedinOption,
  GrGithub,
} from "react-icons/gr";
import homePageData from "../../data/homepage";
import { useDispatch, useSelector } from "react-redux";
import { createAccount, signupPageSelector } from "./reducer";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { appSelector, googleLoginInfo } from "../App/reducer";

function SignupPage() {
  const { signupQuote } = homePageData;
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    mobile: "",
  });

  const { isAuthenticated } = useSelector(appSelector);
  const { loading, errorMsg } = useSelector(signupPageSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (errorMsg) toast.error(errorMsg);
  }, [errorMsg]);

  const handleOauthClick = (e) => {
    e.preventDefault();
    toast.info("This option is disabled.");
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password, mobile } = loginInfo;
    dispatch(
      createAccount({
        email: email,
        password: password,
        mobile: mobile.slice(0, 10),
      })
    );
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (response) => {
      dispatch(googleLoginInfo(response));
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Google Login Failed !");
    },
  });

  return (
    <div className="bg-[#001B2E]">
      <Header customStyles="" isTextWhite hideSignUp />
      <div className="py-10 flex items-center justify-center ">
        <div
          className="bg-white w-full mx-40 onlyMobile:mx-4 min-h-[80vh] 
    rounded-lg flex overflow-hidden flex-wrap "
        >
          <div className="flex-1 bg-blue-600 flex items-center justify-center ">
            <h1 className="text-h4 px-20 text-white font-one mobile:py-4 onlyMobile:text-h9">
              {signupQuote}
            </h1>
          </div>
          <div className="flex-1 py-4 mobile:basis-1/2 flex flex-col">
            <div
              className="my-6 p-4
          text-white font-ubuntu
          bg-blue-800 rounded-r-[50px] text-h8 w-1/2"
            >
              <p>{`Welcome`}</p>
            </div>
            <h1 className="text-h8 text-center font-ubuntu pt-4">
              Create Your Account
            </h1>
            <form
              className="flex flex-col px-10  
        py-4 gap-y-4 items-center justify-center w-full "
              onSubmit={handleOnSubmit}
            >
              <InputField
                type="text"
                name="email"
                label="Email"
                placeholder="Enter Email"
                value={loginInfo.email}
                onChange={handleInputChange}
              />
              <InputField
                type="password"
                name="password"
                label="Password"
                value={loginInfo.password}
                placeholder="Enter Password"
                onChange={handleInputChange}
              />
              <InputField
                type="number"
                name="mobile"
                label="Mobile"
                placeholder="Enter Mobile Number"
                value={loginInfo.mobile.slice(0, 10)}
                onChange={handleInputChange}
                maxLength="10"
              />

              <Button
                type="submit"
                name="signup"
                text="signup"
                height="40px"
                width="50%"
                loading={loading}
                customStyle="bg-blue-500 uppercase min-w-[120px] mb-2"
              />
              <div className="flex py-2 gap-x-6 items-center">
                <GrGoogle
                  className="h-10 w-12 text-blue-400 
            shadow-md p-2 rounded-md cursor-pointer"
                  onClick={() => handleGoogleLogin()}
                />
                <GrInstagram
                  className="h-10 w-12 text-pink-500 
            shadow-md p-2 rounded-md cursor-pointer"
                  onClick={handleOauthClick}
                />
                <GrLinkedinOption
                  className="h-10 w-12 text-blue-600 
            shadow-md p-2 rounded-md cursor-pointer"
                  onClick={handleOauthClick}
                />
                <GrGithub
                  className="h-10 w-12
            shadow-md p-2 rounded-md cursor-pointer"
                  onClick={handleOauthClick}
                />
              </div>
            </form>
            <div className="pt-10 text-center justify-self-end">
              <p className="text-body2 font-ubuntu">
                {`Already have Account ? `}
                <Link
                  to="/login"
                  className="font-ubuntu text-body1 text-blue-700
               font-bold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

SignupPage.propTypes = {};

export default SignupPage;
