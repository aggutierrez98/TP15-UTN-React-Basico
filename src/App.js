import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido</h1>
        <p>A la diplomatura en React</p>
        <p>En el curso se aprenderan los fundamentos para el desarrollo de aplicaciones con ReactJs</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Para mas informacion sobre ReactJs
        </a>
      </header>
    </div>
  );
}

export default App;
