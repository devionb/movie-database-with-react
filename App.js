import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// componets need to be closed EX: <Welcome />
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () =>  (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/"> 
          <h1> Movie DataBase </h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);


export default App;

