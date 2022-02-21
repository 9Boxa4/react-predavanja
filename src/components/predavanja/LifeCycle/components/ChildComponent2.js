import React, { Component } from 'react'

 class ChildComponent2 extends Component {

    componentWillUnmount()
    {
        alert(`This will componenet will unmount`)
    }

  render() {
    return (
     
        <>
        I am a child component
      </>
    )
  }
}
export default ChildComponent2;