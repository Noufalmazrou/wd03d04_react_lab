 
import Fave from './Fave'
import React, { Component } from 'react'

export default class FilmRow extends Component {
//    handleDetailsClick = (el =>{
// console.log("Fetching details for "+ el);

//    })


   render() {
      var year = new Date(this.props.film.release_date );
      return (
         <div className = 'film-row'onClick = {()=>this.props.handleDetailsClick(this.props.film.title)} >
        <img src = {`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} />
        <div className = ' film-summary' >
        <Fave onFaveToggle={this.props.onFaveToggle} isFave = {this.props.isFave} />
        <h3>{this.props.film.title}</h3>
        <p>{year.getFullYear()}</p> 
        </div>
   </div> 
      )
   }
}