import React, { Component } from 'react'

export default class Fave extends Component {
    constructor(props){
        super(props)
    
    this.state={
        isFave : false
    }
}
      handelEventSelect = (e)=> {
        console.log("data")
        this.setState({
   isFave: !this.state.isFave
        })
       e.stopPropagation()


      }

           
    render() {
           
const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
           
             <div className={"film-row-fave "+isFave} onClick = {(e)=>this.handelEventSelect(e)}> 
            <p className="material-icons" >add_to_queue</p>
          </div>
        )
    }
}