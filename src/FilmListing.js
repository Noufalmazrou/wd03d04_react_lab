import FilmRow from './FilmRow'


import React, { Component } from 'react'

export default class FilmListing extends Component {
    constructor(props){
        super(props)
    
    this.state={
        filter : 'all'
    }
}
    //  filmRow = this.props.films.map(item =>{ 
    //     return <FilmRow  item={item.title} poster={item.poster_path} date ={item.release_date}  />
    // })
    

    handleFilterClick = (filter)=> {
        this.setState({
            filter : filter
                 })
       }
   

    render() {
        const allFilms = this.props.films.map((film) => {
            return (
            <FilmRow
            film={film}
            key={film.id}
            onFaveToggle={() => this.props.onFaveToggle(film)}
            />
          )
          })
        return (
                             
<div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters"> 
    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'fave' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            FAVES
          
            <span className="section-count">0</span>
        </div>
        </div>
        
        {allFilms}
    </div>
    

   

        )
    }
}