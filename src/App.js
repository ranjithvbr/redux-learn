import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {update} from "./dispatch/update"

class App extends React.Component {

  onupdate=(e)=>{
    console.log("invoke")
    this.props.onupdate(e.target.value)
  }

  render(){
    console.log(this.props.rstate)
    console.log(this.props.astate)

    return (
      <div className="App">
      <input onChange={this.onupdate}></input><br />
      {this.props.rstate}<br />
      {this.props.astate}
      </div>
    );
  }

}

const mapStateToProps=state=>({
    rstate:state.react,
    astate:state.angular
})

const mapActionstoProps ={
  onupdate:update
}

export default connect(mapStateToProps,mapActionstoProps)(App);
