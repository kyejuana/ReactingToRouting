import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
   
    <main className="container">
      <section className="row mt-3">
        <div className="col-12">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/viewfilms">Films</NavLink>
         <NavLink to="/viewpeople">People</NavLink>
          <h1 className="text-center">Studio Ghibli Routing Lab</h1>

          <p>I hope you enjoy my lab. I will update the lab as I become better and learn more. Have a great day!!!</p>
          <h3 className="text-center">About Studio Ghibli</h3>
          <p>The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli. It was created to help users discover resources, consume them via HTTP requests, and interact with them in whatever way makes sense. Navigation can be found on the left sidebar, and the right sidebar shows examples of returned objects for successful calls.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
