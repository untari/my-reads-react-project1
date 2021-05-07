import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Shelf from './Shelf';
import Main from './Components/Main'
import Search from './Search';
import * as BooksAPI from "./BooksAPI";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
            <Route exact path='/' component={Main} />
            <Route  path='/search' component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
