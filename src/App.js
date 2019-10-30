
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import FlimRow from './FilmRow'
import TMDB from './TMDB'
import './normalize.css'

import React, { Component } from 'react'
import { tsConstructorType } from '@babel/types';
export default class App extends Component {
 
  constructor(){
    super()
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  this.state= {
    films : TMDB.films,
    faves :[],
    current : [],
   
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
this.setState({faves})

}
  render() {
    return (
      <div className="film-library">
   
      <FilmListing
       films={this.state.films}
        faves = {this.state.faves}
        onFaveToggle = {this.handleFaveToggle}
        />
    <FilmDetails current={this.state.current}/>

    </div>
    )
  }
}
