import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getGenres } from "/src/redux/actions/movieActions";
import Hero from "/src/components/Hero.jsx";
import MovieList from "/src/components/MovieList.jsx";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    dispatch(getMovies());

    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {/* 
        > herbir kategori için kategoriye ait filmleri
        > önce api'dan alıp sonra ekrana bascak bileşeni bas
        */}

      {state.genres.map((genre) => (
        <MovieList key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
