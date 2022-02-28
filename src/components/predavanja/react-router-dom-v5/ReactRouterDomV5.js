import DeleteUsers from "./components/DeleteUsers";
import GetUsers from "./components/GetUsers";
import PostUsers from "./components/PostUsers";
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import {Home,About,Users,UserDetails} from "./views";
import UserContextProvider from "./context/UserContext";

function ReactRouterDomV5() {
  return (
    <div>
      <UserContextProvider>
      {/* <GetUsers/> 
      <PostUsers/> */}

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home </Link>
            </li>
            <li>
            <Link to="/about" >About </Link>
            </li>
            <li>
            <Link to="/users" >Users </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/users/:id">
            <UserDetails/>
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      </UserContextProvider>
    </div>
  )
}

export default ReactRouterDomV5;