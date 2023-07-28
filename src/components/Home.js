import React from "react";
import * as User from '../data/user'

function Home() {
  return (
    <div id="home">
      <h1>
        {User.username} is a Web Developer from {User.city}
      </h1>
    </div>
  );
}

export default Home