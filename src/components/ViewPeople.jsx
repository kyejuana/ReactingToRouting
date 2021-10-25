import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const ViewPeople = () => {
    const [people, setPeople] = useState([]);
    const history = useHistory();
    const handleGoHome = () => {
        setTimeout(() => {
            history.push('/');
        }, 2000);
    }

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(people => setPeople(people));
    }, []);
    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <ul className="list-group">
                    <button onClick={handleGoHome}>Go Back</button>
                        <h1 className="text-center">View People</h1>
                            {people.map((people) => (
                                <li key={"people-item-${people.id}"} className="list-group-item">
                                <p>{people.name}</p>
                                <p>{people.gender}</p>
                                <p>{people.age}</p>
                                {people.peopleID}
                <Link to={`/viewpeople/${people.id}`} className="btn btn-primary">
                  More on Film
                </Link>
              </li>
            ))}
          </ul>
                </div>
            </section>
        </main>
    );
}

export default ViewPeople;

