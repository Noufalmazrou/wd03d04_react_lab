 
// import Fave from './Fave'
// import React, { Component } from 'react'

// export default class FilmRow extends Component {
// //    handleDetailsClick = (el =>{
// // console.log("Fetching details for "+ el);

// //    })


//    render() {
//       var year = new Date(this.props.film.release_date );
//       return (
//          <div className = 'film-row'onClick = {()=>this.props.handleDetailsClick(this.props.film.title)} >
//         <img src = {`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} />
//         <div className = ' film-summary' >
//         <Fave onFaveToggle={this.props.onFaveToggle} isFave = {this.props.isFave} />
//         <h3>{this.props.film.title}</h3>
//         <p>{year.getFullYear()}</p> 
//         </div>
//    </div> 
//       )
//    }
// }

import React from 'react'
import Fave from './Fave'
import FilmPoster from './FilmPoster'

const FilmRow = (props) => {
 
      let year = new Date(props.film.release_date );
      return (
         <div className = 'film-row'onClick = {()=>props.handleDetailsClick(props.film.title)} >
        <img src = {`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} />
        <div className = ' film-summary' >
        <Fave onFaveToggle={props.onFaveToggle} isFave = {props.isFave} />
        <h3>{props.film.title}</h3>
        <p>{year.getFullYear()}</p> 
        </div>
   </div> 
   )
}

export default FilmRow
