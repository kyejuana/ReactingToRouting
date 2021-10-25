import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import ViewFilms from "./components/ViewFilms";
import ViewFilmID from "./components/ViewFilmID";
import ViewPeople from "./components/ViewPeople";
import ViewPeopleID from "./components/ViewPeopleID";



const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>    
                <Route exact path="/viewfilms">
                    <ViewFilms /> 
                </Route>    
                <Route exact path="/viewfilms/:filmid">
                    <ViewFilmID /> 
                </Route>   
                <Route exact path="/viewpeople">
                    <ViewPeople />  
                </Route>    
                {/* <Route exact path="/viewpeople/:peopleid">
                    <ViewPeopleID />  
                </Route>     */}
            </Switch>
        </BrowserRouter>
    );
};

export default App;
