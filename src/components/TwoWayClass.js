import React from "react";

export default class TwoWayClass extends React.Component
{
    constructor(props){
         super (props)
         this.state = {
            userName:'Tejas'
         }
         this.handleUserChange = this.handleUserChange.bind(this);
    }  
    
    handleUserChange(e){
        this.setState({
         useName: e.target.value
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>user Details</h2>
                <input type="text" onChange={this.handleUserChange.bind(this)}/>
                <br />
                <p>Hello! {this.state.userName}</p>
            </div>
        )
    }
}