import './App.css';
import {useState, useEffect} from "react";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes, Link} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Movie from "./routes/Movie";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/hello" element={<Link to="/">Hello</Link>}>
          </Route>
          <Route path="/detail" element={<Detail />}>
          </Route>
        <Route path="/movie" element={<Movie />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
