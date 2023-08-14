import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  appSelector,
  userLogOut,
  getSearchSuggestions,
  getSearchSuggestionsFail,
} from "../../../container/App/reducer";
import { toast } from "react-toastify";

function Header({
  customStyles,
  isTextWhite,
  hideSignUp,
  hideLogin,
  showSearch,
}) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenDropDown = () => {
    setDropDownOpen((prev) => !prev);
  };
  const { isAuthenticated, searchSuggestions } = useSelector(appSelector);

  const handleLogout = (e) => {
    e.preventDefault();
    toast.info("Logging out !");
    dispatch(userLogOut());
  };

  const handleSearchTextChange = (e) => {
    e.stopPropagation();
    const { value } = e.target;
    setSearchText(value);
    setShowSuggestions(true);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchSuggestionsFail());
    navigate(`/search/${searchText}`);
  };

  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(getSearchSuggestions(searchText)),
      100
    );
    return () => {
      clearInterval(timer);
    };
  }, [dispatch, searchText]);

  return (
    <div
      className={`h-20 px-4 flex items-center justify-between bg-transparent relative ${
        customStyles ? customStyles : ""
      } `}
    >
      <Link
        className={`text-title px-6 onlyMobile:px-2  uppercase font-one ${
          isTextWhite ? "text-[#FDFFFE]" : "text-primaryGreen"
        } ${showSearch ? "onlyMobile:hidden" : ""}`}
        to="/"
      >
        Beyond
      </Link>
      {showSearch && (
        <Link
          className={`text-title px-6 onlyMobile:px-2  uppercase font-one ${
            isTextWhite ? "text-[#FDFFFE]" : "text-primaryGreen"
          } ${showSearch ? "onlyMobile:block hidden" : ""}`}
          to="/"
        >
          B
        </Link>
      )}
      {showSearch && (
        <form
          className="flex h-16 bg-white items-center border 
          rounded-[45px] w-[50%] onlyMobile:w-[80%] px-4 gap-x-4 relative"
          onSubmit={handleOnSubmit}
        >
          <FiSearch className="h-6 w-6" />
          <input
            type="text"
            name="location"
            value={searchText}
            placeholder="Where to ?"
            className="h-full w-full rounded-[45px]  focus:outline-none text-h8"
            onChange={handleSearchTextChange}
          />
          {searchSuggestions?.length > 0 && showSuggestions && (
            <div
              className="absolute top-16 left-10 w-[calc(100%-64px)]
            border z-20 bg-white px-4 rounded-b-lg"
            >
              {searchSuggestions.map((text) => (
                <p
                  className="py-2 body-text1 font-bold cursor-pointer"
                  key={text}
                  onClick={() => {
                    setSearchText(text);
                    setShowSuggestions(false);
                    navigate(`/search/${text}`);
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          )}
        </form>
      )}
      <div className="flex items-center px-4 gap-x-1 backdrop-brightness-100">
        <Link
          to="/fav-trips"
          className={`onlyMobile:hidden flex px-2 justify-between items-center cursor-pointer ${
            isTextWhite && "text-[#FDFFFE]"
          }`}
        >
          <AiOutlineHeart className="h-5 w-5 text-h8" />
          <h3 className="pl-1 text-h8 font-ubuntu tracking-normal ">Trips</h3>
        </Link>
        <div
          className={`flex items-center gap-x-2 justify-between
             p-2 border-2 rounded-2xl cursor-pointer relative ${
               isTextWhite && "text-[#FDFFFE]"
             }`}
          onClick={() => handleOpenDropDown()}
        >
          <AiOutlineMenu className="h-6 w-6 " />
          <AiOutlineUser className="h-6 w-6 " />
        </div>
      </div>
      <div
        className={`absolute top-[64px] right-[40px] min-w-[150px] transition-all duration-500 ease-in-out
                shadow-md py-2 px-4 bg-white  text-black border rounded-md ${
                  dropDownOpen ? `block !z-50` : `hidden`
                }`}
      >
        {isAuthenticated ? (
          <React.Fragment>
            <Link
              className="block text-body3 capitalize py-1 cursor-pointer"
              to="/profile"
            >
              Profile
            </Link>
            <div
              className="block text-body3 capitalize py-1 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {!hideSignUp && (
              <Link
                className="block text-body3 capitalize py-1 cursor-pointer"
                to="/signup"
              >
                Sign Up
              </Link>
            )}
            {!hideLogin && (
              <Link
                className="block text-body3 bg-white capitalize py-1 cursor-pointer"
                to="/login"
              >
                Log In
              </Link>
            )}
          </React.Fragment>
        )}
        <Link
          className="hidden onlyMobile:block text-body3 capitalize py-1 cursor-pointer"
          to="/fav-trips"
        >
          ♥ Trips
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  customStyles: PropTypes.string,
  isTextWhite: PropTypes.bool,
  hideLogin: PropTypes.bool,
  hideSignUp: PropTypes.bool,
  showSearch: PropTypes.bool,
};

export default Header;
