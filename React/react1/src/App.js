import logo from "./logo.svg";
import "./App.css";
import Good from "./Good";
import Test from "./Test";
import Table from "./Table";
import Navbar from "./Navbar";
import User from "./User";
import Message from "./Message";
import Counter from "./Counter";
import Binding from "./Binding";
import Form from "./Form";
import Lifecycle from "./Lifecycle";
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Besant from "./Besant";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/message" element={<Message />} />
          <Route path="/binding" element={<Binding />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/besant" element={<Besant />} />
        </Routes>
      </Router>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>

      <Good />
      <hr />
      <Test />
      <hr />
      <Table />
      <hr />
      <User />
      <Message />
      <hr />
      <Counter />
      <hr />
      <Binding />
      <hr />
      <Form />
      <hr />
      <Lifecycle />
    </div>
  );
}

export default App;
