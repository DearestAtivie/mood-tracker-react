import logo from './logo.svg';
import './App.css';
import Title from '.components/Title.js'
import TodayIs from '.components/TodayIs.js'
import Dropdown from '.components/Dropdown.js'
import On from '.components/On.js'
import Dropdown2 from '.components/Dropdown2.js'
import IamFeeling from '.components/IamFeeling.js'
import Emojis from '.components/Emojis.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Edit <code>src/App.js</code> and save to reload.
        </h1>
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
