import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const ViewFilms = () => {
    const [films, setFilms] = useState([]);
    const history = useHistory();
    const handleGoHome = () => {
        setTimeout(() => {
            history.push('/');
        }, 2000);
    }

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((films) => setFilms(films));
  }, []);

  return (
    <main className="container">
      <section className="row mt-3">
        <div className="col-md-6">
          <ul className="list-group">
            <button onClick={handleGoHome}>Go Back</button>
             {films.map((film) => (
               <li key={"film-item-${film.id}"} className="list-group-item">
                <p>{film.title}</p>
                <p>{film.release_date}</p>
                <p>{film.description}</p>
                {film.filmID}
                <Link to={`/viewfilms/${film.id}`} className="btn btn-primary">
                  More on Film
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ViewFilms;
