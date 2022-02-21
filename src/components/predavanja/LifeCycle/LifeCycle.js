
import React, { Component } from 'react'
import ChildComponent from './components/ChildComponent';
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';



 class LifeCycle extends Component {

  constructor()
  {
    super();
    this.state = {
      name: "This name will change in 3 seconds ",
      show: true,
    }
  }


  componentDidMount ()
  {
    setTimeout(()=>
    {
      this.setState({name: 'The name was changed'})
    },3000)

    //Usual purpose
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  }


  render() {
    return (
      <div>
          <p>{this.state.name}</p>
          {/* <ChildComponent/> */}
          {/* <ChildComponent1/> */}
          {/* <ChildComponent2/> */}
          {this.state.show? <ChildComponent2/> : null}
          <br />

          <button style={{marginLeft:10}} onClick={()=> this.setState({show: !this.state.show})}>{this.state.show? 'Unmount Componenent' : 'Mount Component'}</button>
      </div>
    )
  }
}



export default LifeCycle;