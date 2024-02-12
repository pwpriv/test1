import logo from './logo.svg';
import './App.css';
import No1 from './components/No1';
import No2 from './components/No2';
import No3 from './components/No3';
import No4 from './components/No4';

function App() {
  return (
    <div className="App">
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <No1></No1>
        <No2/>
        <No3/>
        <No4/>
      </header>
      </div>
    </div>
  );
}

export default App;
