import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../useFetch";
import { FavoritesContext } from "../../FavoriteContext";
import { ReactComponent as Heart } from "../../../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../../../assets/heart-solid.svg";

const EventDetails = () => {
  const [favorites, handleFavorites] = useContext(FavoritesContext);

  const { id } = useParams();

  const {
    data: event,
    loading,
    error,
  } = useFetch(
    `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=cXPzpyRCFGb36jPxbQvX4ylcIB5R2Oox`
  );
  const isEventInFavorites = favorites.some(
    (favEvent) => favEvent.id === event.id
  );
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!event || !event.name) {
    return <div>Event not found</div>;
  }

  return (
    <div className="content">
      <div className="event-details">
        <img
          className="event-image"
          src={event.images[0].url}
          alt={event.name}
        />
        <h3 className="event-name">{event.name}</h3>
        <p className="event-date">Date: {event.dates.start.localDate}</p>
        <p className="event-time">Time: {event.dates.start.localTime}</p>
        <p className="event-venue">Venue: {event._embedded.venues[0].name}</p>
        <p className="event-venue">
          city: {event._embedded.venues[0].city.name}
        </p>
        <p className="event-venue">
          address: {event._embedded.venues[0].address.line1}
        </p>
        <Link to={event.url}> Book your ticket here</Link>
        <div
          className="favorite"
          onClick={() => {
            handleFavorites(event);
          }}
        >
          {isEventInFavorites ? <HeartSolid /> : <Heart />}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
