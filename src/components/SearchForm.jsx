import React, { useState, useEffect } from "react";
import { CustomCard } from "./CustomCard";
import { fetchFromAPI } from "../helpers/axiosHelper";
import { randmonChar } from "../helpers/helpers";

export const SearchForm = ({ addToMovieList }) => {
  const [serchStr, setSearchStr] = useState("");

  const [serchedMovie, setSerchedMovie] = useState({});

  useEffect(() => {
    const c = randmonChar();
    fetchMovie(c);
  }, []);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchStr(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchMovie(serchStr);
  };

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSerchedMovie(movie);
  };
  const func = (mode) => {
    addToMovieList({ ...serchedMovie, mode });

    //reset searched movie
    setSerchedMovie({});
  };

  const handleOnDelete = () => {
    setSerchedMovie({});
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row g-5">
        <div className="col-md ">
          <form action="" onSubmit={handleOnSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="serach movie name..."
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="d-grid">
              <button className="btn btn-warning">Search Movie</button>
            </div>
          </form>
        </div>
        <div className="col-md">
          {serchedMovie?.Response === "True" && (
            <CustomCard
              func={func}
              serchedMovie={serchedMovie}
              deleteFunc={handleOnDelete}
            />
          )}

          {serchedMovie?.Response === "False" && (
            <div className="alert alert-danger">{serchedMovie.Error}</div>
          )}
        </div>
      </div>
    </div>
  );
};
