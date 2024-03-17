import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import { db } from "../services/Firebase";
import toast from "react-hot-toast";

const MovieItem = ({ movie }) => {
  const { user } = UserAuth();
  const [like, setLike] = useState(false);
  const markFavShow = async () => {
    const userEmail = user?.email;
    if (userEmail) {
      const userDoc = doc(db, "users", userEmail);
      setLike((prev) => !prev);
      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...movie }),
      });
    } else {
      toast.error("Login to save a movie");
    }
  };
  const { title, poster_path } = movie;
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[270px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
      <img src={createImageUrl(poster_path, "w500")} alt={title} />
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm justify-center flex items-center h-full font-nsans-bold">
          {movie.title}
        </p>
        <p onClick={markFavShow}>
          {like ? (
            <FaHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
