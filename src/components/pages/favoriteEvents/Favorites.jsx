import React, { useContext } from "react";
import { FavoritesContext } from "../../FavoriteContext";
import Event from "../home/Event";

const Favorites = () => {
  const [favorites, handleFavorites] = useContext(FavoritesContext);
  return (
    <div className="content ">
      <div className="cards-container">
        {favorites.length == 0 ? (
          <div className="center">There is no favorite event</div>
        ) : (
          favorites.map((event) => <Event key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
};

export default Favorites;
