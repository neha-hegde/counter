import React, {Component} from "react";
import "./App.css"

class App extends Component{
  constructor(){
    super();
    this.state = {
      count:0
    }
  }

  handleClick = () => {
    //this.setState({count:1});
    this.setState((prevState)=>{
      return { //returning an object
        count: prevState.count + 1
      }
    });
  }

  handleClick1 = () => {
    this.setState({count:0});
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button> 
        <br />
        <button onClick={this.handleClick1}>Reset!</button>
        <br />
      </div>
    );
  }
}

export default App;