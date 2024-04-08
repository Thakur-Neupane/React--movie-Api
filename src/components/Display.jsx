/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList, handleOnDelete }) => {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);

  const filterMovies = (mode) => {
    if (mode === "all") {
      return setDisplayMovie(movieList);
    }
    const filteredArg = movieList.filter((m) => m.mode === mode);
    setDisplayMovie(filteredArg);
  };

  return (
    <div className="bg-black mt-5 p-5 rounded">
      <div className="row">
        <div className="col">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              onClick={() => filterMovies("all")}
              type="button"
              className="btn btn-primary"
            >
              All
            </button>
            <button
              onClick={() => filterMovies("drama")}
              type="button"
              className="btn btn-warning"
            >
              Drama
            </button>
            <button
              onClick={() => filterMovies("action")}
              type="button"
              className="btn btn-info"
            >
              Action
            </button>
          </div>
          <p className="mt-3"> {displayMovie.length} movies listed</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col d-flex flex-wrap gap-2  ">
          {displayMovie.map((movie) => (
            <CustomCard
              key={movie.imdbID}
              serchedMovie={movie}
              deleteFunc={handleOnDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
