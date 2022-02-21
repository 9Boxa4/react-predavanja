import React,{Component} from 'react';
// import '.././App.css';


class Counter extends Component {
    state = {
        counter: 0,
        URL:"https://img.1movieshd.com/xxrz/250x400/233/3f/06/3f0602dc9bbd7683653701a3c3e8f615/3f0602dc9bbd7683653701a3c3e8f615.jpg",
        tags : ["tag1","tag2","tag3"],
    }

    // constructor()
    // {
    //     super();
    //     this.formatCount = this.formatCount.bind(this);
    //     // this.handleIncrement = this.handleIncrement.bind(this)
    // }
    
   
    // formatCount()
    // {
    //     //destructuring
    //     const {counter} = this.state
    // }
 
    formatCount = () => {
        const {counter} = this.state
        return counter === 0? "Zero" : counter;
    }

    handleIncrement =() => 
    {
        // console.log(`handleIncrement`);
        this.setState({counter: this.state.counter + 1})
    }

    handleDecrement = () =>
    {
        this.setState({counter: this.state.counter -1})
    }

    styles = {
        fontSize: "30px",
        fontWeigt:"Bold"
    }
    getClass = () =>
    {
        const {counter} = this.state
        return counter>0 ? "success" : "warning"
    }

    checkSuccess = () =>
    {
        return this.state.counter === 0 ?
        <p className ="warning"> {this.state.counter}</p> :
        <p className ="success"> {this.state.counter}</p>
    }


    render()
    {
        return(
            <div>
            <h2 style={this.styles[0]}>Pozdrav iz Child komponente</h2>  
            <p style={{fontSize:`30px`}}>Ja sam paragraf</p>

            <img src={this.state.URL} alt="Random" />

            <br />

            <button onClick={this.handleDecrement} >-</button>
            {/* <p>Count: {this.state.counter}</p> */}

            <p className={this.getClass()}>Count: {this.formatCount()}</p>
            {/* <p className={this.state.counter === 0 ? 'warning':'success'}>Count: {this.formatCount()}</p> */}

            <button  onClick={this.handleIncrement}>+</button>
            
            <h1>Tagovi</h1>

            {
                this.state.tags.map((tag,i)=>
                (
                    <p key ={i}># {tag}</p>
                ))
            }

            </div>         
        )
    }
}

export default Counter ;

