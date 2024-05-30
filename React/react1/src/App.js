import logo from "./logo.svg";
import "./App.css";
import Good from "./Good";
import Test from "./Test";
import Table from "./Table";
import User from "./User";
//import Message from "./Message";
import Message from "./redux/Message";
import Counter from "./Counter";
import Binding from "./Binding";
import Form from "./Form";
import Lifecycle from "./Lifecycle";
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Besant from "./Besant";
import Hook from "./Hook";
import Axioss from "./Axioss";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
        <hr />
        <Hook />
        <hr />
        <Axioss />
        <hr />
        <Message />
      </Provider>
    </div>
  );
}

export default App;
