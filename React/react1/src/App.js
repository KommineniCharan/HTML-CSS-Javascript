import logo from "./logo.svg";
import "./App.css";
import Good from "./Good";
import Test from "./Test";
import Table from "./Table";
import Navbar from "./Navbar";

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
    </div>
  );
}

export default App;
