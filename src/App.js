import ToDo from "./components/predavanja/ToDoLista/ToDo";
import Hooks from "./components/predavanja/Hooks/Hooks";
import Form from "./components/predavanja/Forms/Form";

function App() {
  return (
    <div>
      <div> FORMS</div>
      
      <Form />
      <div> HOOKSa</div>
      <Hooks />
      <div>TODO</div>
      <ToDo />
    </div>
  );
}

export default App;
