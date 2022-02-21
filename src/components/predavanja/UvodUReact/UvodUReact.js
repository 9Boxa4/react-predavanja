import React, { Component } from 'react';

import Counter from './component/Counter';
import Counters from './component/Counters';
import NavBar from './component/NavBar';




class UvodUReact extends Component {
  state = 
  {
      counters: [
          {id:0, value:0},
          {id:1, value:1},
          {id:2, value:2},
          {id:3, value:3}
      ]
  };

  render()
  {
    return (
      <div className="App">
  
        {/* <Counter/> */}
        <NavBar totalCounters={this.state.counters.length}/>
        <Counters/>
      </div>
    );
  }
}

export default UvodUReact;
