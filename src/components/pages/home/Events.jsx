import React from "react";
import useFetch from "../../useFetch";
import Event from "./Event";

const Events = ({ url }) => {
  const { data: events, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!events || !events._embedded || !events._embedded.events) {
    return <div>No events found.</div>;
  }

  return (
    <div className="cards-container">
      {events._embedded.events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;
