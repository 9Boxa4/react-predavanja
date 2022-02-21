import React, { Component } from 'react'

class Forms extends Component {
    state ={
        name: ""
    }

    handleChange = (event) => 
    {
        console.log(event);
        this.setState({name: event.target.value})
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        alert(`You are submiting ${this.state.name}`)
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h1>Hello {this.state.name}</h1>
          <p>Enter your name</p>
          <input type="text" onChange={this.handleChange} />
          <input style={{marginLeft:7}} type="submit" value="submit" />
      </form>
    )
  }
}

export default Forms
