import { greenPointsState } from './selectors';
import logo from './logo.svg';
import './App.css';
import { useRecoilValue } from 'recoil';

function App() {
  const greenPoints = useRecoilValue(greenPointsState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>{greenPoints}</p>
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
    </div>
  );
}

export default App;
