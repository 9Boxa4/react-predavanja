import React, { Component } from 'react'
import ChildCounter from './ChildCounter';


 class Counters extends Component {
    state = 
    {
        counters: [
            {id:0, value:0},
            {id:1, value:1},
            {id:2, value:2},
            {id:3, value:3}

        ]
    }

    handleIncrement = (id) => {
        console.log(id, 'U Counters, handleIncrement se nalazim');
        
        //Spread operators
        const counters = [...this.state.counters];


        this.setState({
            counters: this.state.counters.map((counter)=>{
                return counter.id === id?
                {
                    ...counter,value: counter.value+1
                } : counter;
            }),
        });
    };

    handleDelete =(id) =>
    {
      console.log(id);

      this.setState({
        counters: this.state.counters.filter((counter)=> counter.id !== id),
        //filter vraca sve sto nije u uslovu u nasem slucaju sve dugmice koji nisu kliknuti, tj. njihov id. znaci brise samo id koji je ostao
      });

      // this.setState((prevState)=>
      // { 
      //   return{
      //     ...prevState,
      //   counters: prevState.counters.filter(counter =>
      //     {
      //       counter.id !== id;
      //     }),
      //   };
      // });
    };
    
  render() {
    return (
      <div>
          {this.state.counters.map((counter)=>
        (
             <ChildCounter
              key ={counter.id}  
              counter = {counter}
            //   id = {counter.id}
            //   value = {counter.value}
              onIncrement = {this.handleIncrement}
              onDelete ={this.handleDelete}
              />
        ))}</div>
    )
  }
}
export default Counters;