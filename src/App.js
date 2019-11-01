
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import FlimRow from './FilmRow'
import TMDB from './TMDB'
import './normalize.css'
import axios from 'axios'

import React, { Component } from 'react'
import { tsConstructorType } from '@babel/types';
export default class App extends Component {
 
  constructor(){
    super()
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  this.state= {
    films : TMDB.films,
    faves :[],
    current : {}
   
  }
  }
  handleFaveToggle (film){
const faves = this.state.faves.slice()
const filmIndex = faves.indexOf(film)
if (filmIndex >= 0 ){
  console.log (`Removing ${film.title} from faves`)
  faves.splice(filmIndex,1)
}
else {
  faves.push (film)
  console.log (`Adding ${film.title} to faves`)
}

this.setState({faves});

}

handleDetailsClick = (film =>{
  console.log("Fetching details for "+ film);

  this.setState({current :film })
  const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
  axios({
    method: 'GET',
    url: url
  }).then(response => {
    console.log(response) // take a look at what you get back!
    this.setState({current: response.data})
  })
 
     })

  render() {
    return (
      <div className="film-library">
   
      <FilmListing
       films={this.state.films}
        faves = {this.state.faves}
        onFaveToggle = {this.handleFaveToggle}
        handleDetailsClick = {this.handleDetailsClick}
        />

    <FilmDetails current={this.state.current}/>

    </div>
    )
  }
}
