import ToDo from "./components/predavanja/ToDoLista/ToDo";
import Hooks from "./components/predavanja/Hooks/Hooks";
import Form from "./components/predavanja/Forms/Form";
import ReadingList from "./components/predavanja/ReadingList/ReadingList";
import LifeCycle from "./components/predavanja/LifeCycle/LifeCycle";
import UvodUReact from "./components/predavanja/UvodUReact/UvodUReact";
// import Vezbanje from "./components/predavanja/Vezbanje/Vezbanje";
// import ReactRouterDomV5 from "./components/predavanja/react-router-dom-v5/ReactRouterDomV5";
import ReactRouterDomV6 from "./components/predavanja/react-router-dom-v6/ReactRouterDomV6";
import MovieSearch from "./components/predavanja/movie-search/MovieSearch";


function App() {
  return (
    <div>
      {/* <hr /><br />
      <h1>UVOD U REACT</h1>
      <UvodUReact/>
      <br /><br />
      <hr />
      <h1> LIFE CYCLE</h1>
      <LifeCycle/>
      <br /><br />
      <hr />
      <h1> FORMS</h1>
      <Form />
      <br/>
      <br/><hr />
      <h1> HOOKS</h1>
      <Hooks />
      <br /><br /><hr />
      <h1> TODO</h1>
      <ToDo />
      <br /><br /><hr /> */}
      {/* <h1> READING LISTA</h1>
      <ReadingList/>
      <br /><br /><hr /> */}
      {/* <h1>React Router DOM v5</h1>
      <ReactRouterDomV5/> */}
      {/* <h1>REACT ROUTER DOM V6</h1>
      <ReactRouterDomV6/> */}
      <h1>Movie searches</h1>
      <MovieSearch/>
      {/* <h1>Vezbanje</h1>
      <Vezbanje/> */}
      
    </div>
  );
}

export default App;
