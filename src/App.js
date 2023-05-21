import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header.jsx";
import Home from "./components/pages/home/Home";
import EventDetails from "./components/pages/eventDetails/EventDetails";
import { FavoriteProvider } from "./components/FavoriteContext";
import Favorites from "./components/pages/favoriteEvents/Favorites";
import { apiKey } from "./apiKey";

function App() {
  const [url, setUrl] = useState(
    `https://app.ticketmaster.com/discovery/v2/events.json?size=21&countryCode=NL&apikey=${apiKey}`
  );
  const handelUrl = (keyword) => {
    if (keyword.length > 0) {
      setUrl(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=21&keyword=${keyword}&countryCode=NL&apikey=${apiKey}`
      );
    } else {
      setUrl(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=21&countryCode=NL&apikey=${apiKey}`
      );
    }
  };
  return (
    <div className="App">
      <Header url={url} handelUrl={handelUrl} />
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Home url={url} setUrl={setUrl} />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoriteProvider>
      <Footer />
    </div>
  );
}

export default App;
