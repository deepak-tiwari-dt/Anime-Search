const AnimeCard = ({ anime }) => {
  return (
    <>
      <img src={anime.images?.jpg.image_url} className="img" />
    </>
  );
};

export default AnimeCard;
