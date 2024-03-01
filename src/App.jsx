import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const App = () => {
  const [animes, setAnimes] = useState([]);
  const [term, setTerm] = useState("Naruto");

  const getAnime = async (name) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
    const { data } = await response.json();
    console.log(data);
    setAnimes(data);
  };

  useEffect(() => {
    getAnime("Naruto");
  }, []);

  return (
    <>
      <h1 id="title">Anime Search</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search for anime e.g One Piece"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="inputText"
        />
        <button onClick={() => getAnime(term)} className="searchBtn">
          Search
        </button>
      </div>

      <div className="container">
        {animes?.length > 0 ? (
          animes.map((anime, index) => <AnimeCard key={index} anime={anime} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </>
  );
};

export default App;
