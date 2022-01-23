import { Route } from "react-router-dom";
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//pages
import Homepage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import './App.css';

//axios Default Settings //same in all for fetch things easiy
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};//fetch an object
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Homepage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />

    </>
  );
}
// / , /movie
export default App;
//temp.js->default layout-> DefaultHOC -> App.js -> Index.js
//inner->outer