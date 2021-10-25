// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { Link, useHistory } from "react-router-dom";

// const ViewPeopleID = () => {
//   const { peopleid } = useParams();
//   const [people, setPeopleID] = useState();
//   const history = useHistory();
//   const handleGoHome = () => {
//       setTimeout(() => {
//           history.push('/');
//       }, 2000);
//   }
//   useEffect(() => {
//     fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
//       .then((res) => res.json())
//       .then((people) => setPeople(people));
//   }, []);
//   return (
//     <main className="container">
//       <section className="row mt-3">
//         <div className="col-12">
//           <button onClick={handleGoHome}>Go Back</button>
//           <h1 className="text-center">View PeopleID</h1>
//           <p>{people?.eye_color}</p>
//           <p>{people?.hair_color}</p>
//           <p>{people?.films}</p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ViewPeopleID;