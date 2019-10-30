import React, { Component } from 'react'

export default class Fave extends Component {
    constructor(props){
        super(props)
    
}
handleClick(e) {
    e.stopPropagation()
    console.log('Handling Fave click!')
  
    // Add this line. You'll call the function passed through props
    this.props.onFaveToggle()
  
    // Delete the `setState` line. You no longer track state here
    // this.setState({isFave: !this.state.isFave})
  }

           
    render() {
           
const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
           
             <div className={"film-row-fave "+isFave} onClick = {(e)=>this.handleClick(e)}> 
            <p className="material-icons" >add_to_queue</p>
          </div>
        )
    }
}