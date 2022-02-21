import React, { Component } from 'react'

//  class NavBar extends Component {
//   render() {
//     return (
//       <div>
//           <h2>Navbar</h2>
//           <p>Ukupan broj je: {this.props.totalCounters}  </p>
//       </div>
//     )
//   }
// }
// export default NavBar;


//Stateless functional Component
//destructucturing props

const NavBar = ({totalCounters}) =>
{
    return (
        <div>

            <h2>NavBar</h2>
            <p>Ukupan broj naseg niza je: {totalCounters} </p>

        </div>
    )
}

export default NavBar;