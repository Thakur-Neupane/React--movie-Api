import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    // have the filted array that donesn't includes the movie
    const tempArg = movieList.filter((item) => item.imdbID !== movie.imdbID);
    //
    setMovieList([...tempArg, movie]);
  };
  const handleOnDelete = (imdbID) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      setMovieList(movieList.filter((item) => item.imdbID !== imdbID));
    }
  };

  console.log(movieList);
  return (
    <div className="container text-warning">
      <div className="row">
        <div className="col">
          <h1 className="mt-5 text-center">My movie Collections!</h1>
        </div>
      </div>
      <hr />

      {/* search section  */}
      <SearchForm addToMovieList={addToMovieList} />

      {/* movie list section  */}
      <Display movieList={movieList} handleOnDelete={handleOnDelete} />
      
    </div>
  );
}

export default App;
