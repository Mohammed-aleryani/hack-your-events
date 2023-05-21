import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../../../assets/heart-solid.svg";
import { FavoritesContext } from "../../FavoriteContext";

const Event = ({ event }) => {
  const [favorites, handleFavorites] = useContext(FavoritesContext);

  const isEventInFavorites = favorites.some(
    (favEvent) => favEvent.id === event.id
  );

  return (
    <div className="card">
      <Link className="link" to={`/event/${event.id}`}>
        <img src={event.images[0].url} alt={event.name} />
        <div className="card-content">
          <h3>{event.name}</h3>
        </div>
      </Link>
      <div
        className="favorite"
        onClick={() => {
          handleFavorites(event);
        }}
      >
        {isEventInFavorites ? <HeartSolid /> : <Heart />}
      </div>
    </div>
  );
};

export default Event;
