import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handelUrl }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (event) => {
    let searchTimeoutToken = 0;
    setSearchValue(event.target.value);

    searchTimeoutToken = setTimeout(async () => {
      handelUrl(event.target.value);
    }, 750);
  };

  return (
    <header>
      <h1>HackYourEvents</h1>

      <div className="search-container">
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search events..."
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="link-header" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-header" to="/favorites">
              Favorites
            </Link>
          </li>
          <li>
            <a className="link-header" href="#footer">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
