// import React from "react";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TripCard({
  image,
  title,
  description,
  likesCount,
  reviewCount,
  customStyles,
  path,
  addFavorite,
  isFavorite,
  disableHeart,
  // id,
}) {
  return (
    <Link
      to={`${path}`}
      className={`block relative shadow-lg w-full lg:max-w-[320px] 2xl:max-w-[30%] overflow-hidden rounded-lg ${
        customStyles ? customStyles : ""
      }`}
    >
      <div className="relative h-[256px]">
        <img src={image} alt="image" className="object-cover h-full w-full" />
        {!disableHeart && (
          <div
            className="absolute right-3 top-3 cursor-pointer"
            onClick={addFavorite}
          >
            <AiFillHeart
              className={`h-8 w-8 cursor-pointer stroke-[4px] ${
                isFavorite ? "fill-red-600" : "fill-slate-300 "
              }`}
            />
          </div>
        )}
      </div>
      <h1 className="text-h9 pt-2 px-2 line-clamp-2 font-ubuntu ">{title}</h1>
      <p className="text-caption pt-1 px-2 leading-4 line-clamp-2 font-ubuntu">
        {description}
      </p>
      <div className="px-2 pt-2 pb-4 absolute bottom-0 flex justify-between w-full">
        <div className="flex items-center gap-x-1">
          <AiFillLike className="h-5 w-5 text-[#FD9022]" />
          <p className="text-body font-ubuntu">{likesCount}</p>
        </div>
        <div>
          <p className="text-body3 font-ubuntu">
            {reviewCount}{" "}
            <span className="font-bold text-slate-400">Rating</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

TripCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  customStyles: PropTypes.string,
  path: PropTypes.string.isRequired,
  addFavorite: PropTypes.func,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  disableHeart: PropTypes.bool,
};

export default TripCard;
