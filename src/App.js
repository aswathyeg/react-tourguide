import "./App.css";

import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Location from "./components/Location";
function App() {
  return (
    <div>
      <Home />
      {/* <Route path="/location" element={<Location />} />
          <Route path="/books" element={<Books />} /> */}
    </div>
  );
}

export default App;
