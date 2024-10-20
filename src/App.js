import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import BookItem from "./BookItem";
import Manhwalist from "./Manhwalist";

function App() {
  return (
    <div className="App">
      <nav className="">
        <p className="bg-red-500 hover:bg-red-700">
          <Link to="Home">Home</Link>
        </p>
        <p className="bg-red-500 hover:bg-red-700">
          <Link to="BookItem">Books</Link>
        </p>
        <p className="bg-red-500 hover:bg-red-700">
          <Link to="Manhwalist">Manhwalist</Link>
        </p>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="BookItem" element={<BookItem />} />
        <Route path="Manhwalist" element={<Manhwalist />} />
      </Routes>
    </div>
  );
}

export default App;
