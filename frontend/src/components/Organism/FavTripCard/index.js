// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function FavTripCard({
  id,
  image,
  title,
  description,
  likesCount,
  review,
  showDelete,
  path,
  handleDelete,
}) {
  return (
    <div
      className="rounded-lg 
  overflow-hidden drop-shadow-lg flex 
  gap-x-4 border my-4 onlyMobile:flex-wrap relative z-10"
    >
      <div className="max-w-[340px] min-h-[300px] onlyMobile:max-w-none onlyMobile:min-h-none w-full">
        <img src={image} alt={id} className="h-full w-full object-cover" />
      </div>
      <div
        className="flex flex-col 
    gap-2 px-2 py-4 flex-1 justify-evenly min-w-[320px] onlyMobile:px-4"
      >
        <h1 className="text-h7 text-ubuntu  line-clamp-2 pt-4 pr-4">{title}</h1>
        <p className="text-body1 text-ubuntu line-clamp-3">{description}</p>
        <div className="grid grid-cols-2 gap-x-6 w-fit">
          <div className="flex gap-x-2 items-center">
            <AiFillLike className="h-5 w-5 text-[#FD9022]" />
            <p className="text-body font-ubuntu">{likesCount}</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-ubuntu text-body1 font-bold">{review}</p>
            <span className="text-ubuntu text-body1 capitalize font-bold text-slate-400">
              Rating
            </span>
          </div>
        </div>
        <Link
          className="self-end mx-4 uppercase font-ubuntu 
         text-body1 font-bold border px-4 py-2 rounded-lg 
         bg-primaryBlue text-white onlyMobile:mx-2"
          to={`${path}`}
        >
          explore
        </Link>
      </div>
      {showDelete && (
        <div
          className="absolute top-5 right-5 z-10 cursor-pointer"
          onClick={handleDelete}
        >
          <MdDelete className="h-6 w-6 text-red-600" />
        </div>
      )}
    </div>
  );
}

FavTripCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  likesCount: PropTypes.number,
  review: PropTypes.number,
  showDelete: PropTypes.bool,
  path: PropTypes.string,
  handleDelete: PropTypes.func,
};

export default FavTripCard;
