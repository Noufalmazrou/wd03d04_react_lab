
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import FlimRow from './FilmRow'
import TMDB from './TMDB'
import './normalize.css'

import React, { Component } from 'react'
export default class App extends Component {
  render() {
    return (
      <div className="film-library">
   
      <FilmListing films={TMDB.films}/>
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        
      </div>

    </div>
    )
  }
}
