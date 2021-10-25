import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";

const ViewFilmID = () => {
  const { filmid } = useParams();
  const [film, setFilm] = useState();
  const history = useHistory();
  const handleGoHome = () => {
      setTimeout(() => {
          history.push('/');
      }, 2000);
  }
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((res) => res.json())
      .then((film) => setFilm(film));
  }, []);
  return (
    <main className="container">
      <section className="row mt-3">
        <div className="col-12">
          <button onClick={handleGoHome}>Go Back</button>
          <h1 className="text-center">View FilmID</h1>
          <p>{film?.title}</p>
          <p>{film?.description}</p>
        </div>
      </section>
    </main>
  );
};

export default ViewFilmID;
