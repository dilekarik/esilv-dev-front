import logo from "./logo.svg";
import "./App.css";
import Button from "./components/lib/Button";
import Table from "./components/lib/Table";
import Collapse from "./components/lib/Collapse";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import UserList from "./components/UserManager/UserList";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Security/Login";
import MatchList from "./components/Matches/MatchList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/matches">Matchs</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/matches" element={<MatchList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  );
}

export default App;
