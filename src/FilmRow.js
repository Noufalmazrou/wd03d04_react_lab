 
import Fave from './Fave'
import React, { Component } from 'react'

export default class FilmRow extends Component {
   handleDetailsClick = (el =>{
console.log("Fetching details for "+ el);

   })


   render() {
      var year = new Date(this.props.date );
      return (
       <div className = 'film-row'onClick = {()=>this.handleDetailsClick(this.props.item)} >
        <img src = {`https://image.tmdb.org/t/p/w780/${this.props.poster}`} />
        <div className = ' film-summary' >
        <Fave />
        <h3>{this.props.item}</h3>
        <p>{year.getFullYear()}</p> 
        </div>
   </div> 
      )
   }
}