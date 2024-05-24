import logo from "./logo.svg";
import "./App.css";
import Good from "./Good";
import Test from "./Test";
import Table from "./Table";
import Navbar from "./Navbar";
import User from "./User";
import Message from "./Message";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Navbar />

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
    </div>
  );
}

export default App;
