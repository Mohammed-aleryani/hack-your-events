import React from "react";
import Events from "./Events";

const Home = ({url,setUrl}) => {
  return (
    <div className="content">
      <Events url={url}  />
    </div>
  );
};

export default Home;
