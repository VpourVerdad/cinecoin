import { useEffect, useState } from "react";
import ApiMovie from "./ApiMovie";
import './App.css';
import MovieSection from "./components/MovieSection";
import FeaturedMovie from "./components/FeaturedMovie";

function App() {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([null]);

    useEffect(() => {
        const loadAllMovies = async () => {
            let list = await ApiMovie.getHomeMovies()
            setMovieList(list)

            let originals = list.filter((movie) => movie.slug === "top-rated")
            let chooseRandomMovie = Math.floor(
                Math.random() * (originals[0].items.results.length - 1)
            )
            let chosenMovie = originals[0].items.results[chooseRandomMovie]
            let chosenInfo = await ApiMovie.getMovieInfo(chosenMovie.id, 'movie')

            setFeaturedData(chosenInfo)
        }

        loadAllMovies()
    }, []);

    return (
      <div className="page">
          {featuredData && <FeaturedMovie films={featuredData} />}
        <section className="lists">
            {movieList.map((item, key) => (
              <MovieSection key={key} title={item.title} items={item.items} />
              ))}
        </section>
      </div>
    )
}

export default App;
