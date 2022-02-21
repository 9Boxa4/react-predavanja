import React from 'react'

function NavBar({todos}) {
  return (
    <div>Todos left on my list:{todos.length}</div>
  )
}

export default NavBar