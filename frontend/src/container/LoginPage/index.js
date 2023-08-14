import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../../components/Organism";
import {
  GrGoogle,
  GrInstagram,
  GrLinkedinOption,
  GrGithub,
} from "react-icons/gr";
import { InputField, Button } from "../../components/Molecules";
import homePageData from "../../data/homepage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, loginPageSelector } from "./reducer";
// import { useGoogleLogin } from "@react-oauth/google";
import { appSelector } from "../App/reducer";
// import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { loginQuote } = homePageData;
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(appSelector);
  const { loading } = useSelector(loginPageSelector);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
    // console.log(loginInfo);
  };

  const handleOauthClick = (e) => {
    e.preventDefault();
    toast.info("This option is disabled.");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    dispatch(
      userLogin({
        email: email,
        password: password,
      })
    );
  };

  // const handleGoogleLogin = useGoogleLogin({
  //   onSuccess: (response) => {
  //     dispatch(googleLoginInfo(response));
  //     // navigate('/');
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //     toast.error("Google Login Failed !");
  //   },
  // });

  return (
    <div className="bg-[#001B2E]">
      <Header customStyles="" isTextWhite hideLogin />
      <div className="py-10 flex items-center justify-center ">
        <div
          className="bg-white w-full mx-40 onlyMobile:mx-4 min-h-[80vh] 
        rounded-lg flex overflow-hidden flex-wrap "
        >
          <div className="flex-1 bg-blue-600 flex items-center justify-center ">
            <h1 className="text-h4 px-20 text-white font-one mobile:py-4 onlyMobile:text-h9">
              {loginQuote}
            </h1>
          </div>
          <div className="flex-1 py-4 mobile:basis-1/2 flex flex-col">
            <div
              className="my-6 p-4
              text-white font-ubuntu
              bg-blue-800 rounded-r-[50px] text-h8 w-1/2"
            >
              <p>Welcome back</p>
            </div>
            <h1 className="text-h8 text-center font-ubuntu pt-4">
              Login to Your Account
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
                onChange={handleInputChange}
              />
              <InputField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter Password"
                onChange={handleInputChange}
              />
              <div className="self-end">
                <Link
                  to="/forgot-password"
                  className="capitalize text-blue-700"
                >
                  forgot password
                </Link>
              </div>
              <Button
                type="submit"
                name="login"
                text="Login"
                height="40px"
                width="50%"
                loading={loading}
                customStyle="bg-blue-500 uppercase min-w-[120px] mb-2"
              />
              <div className="flex py-2 gap-x-6 items-center">
                <GrGoogle
                  className="h-10 w-12 text-blue-400 
                shadow-md p-2 rounded-md cursor-pointer"
                  onClick={handleOauthClick}
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
                {`Don't you have account ? `}
                <Link
                  to="/signup"
                  className="font-ubuntu text-body1 text-blue-700
                   font-bold"
                >
                  Sign up
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

LoginPage.propTypes = {};

export default LoginPage;
