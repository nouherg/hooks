import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviedata } from "./data";
import NavBar from "./component/NavBar";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";
import {Routes , Route} from "react-router-dom";
import Home from "./component/Home";
import Trailer from "./component/Trailer";

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
        <Routes>
         <Route path="" element={<Home/>}/>
        <Route path="/trailer" element={< Trailer/>}/>
        <Route path="/MovieList" element={ <MovieList movies={movielist.filter((movie) => movie.title.toUpperCase().includes(title.toUpperCase()) && movie.rate >= rate)}/>}/>
        <Route path="/AddMovie" element={ <AddMovie handleAdd={handleAdd} />}/>
        </Routes> 
    </div>
  );
}

export default App;