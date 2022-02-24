import CounterReducer from "./components/CounterReducer";
import BookContextProvider from "./context/BookContext";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";




function ReadingList() {
  return (
    <div className="App">
      <CounterReducer/>

      <BookContextProvider>
      <NavBar/>
      <BookList/>
      <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default ReadingList;
