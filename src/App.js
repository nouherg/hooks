import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviedata } from "./data";
import NavBar from "./component/NavBar";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";


function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    setRate(newRating);
  }

  const handleAdd = (newMovie) => {
    setMovielist([...movielist, newMovie]);
  }

  return (
    <div className="App">
        <NavBar title={title} handleChange={handleChange} rate={rate} ratingChanged={ratingChanged} />
        <MovieList movies={movielist.filter((movie) => movie.title.toUpperCase().includes(title.toUpperCase()) && movie.rate >= rate)}/>
        <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;