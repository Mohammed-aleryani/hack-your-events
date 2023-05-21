import React, { useState, createContext, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoriteProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (item) => {
    const index = favorites.indexOf(item);
    if (index !== -1) {
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <FavoritesContext.Provider value={[favorites, handleFavorites]}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
