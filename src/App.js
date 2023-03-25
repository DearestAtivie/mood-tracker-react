import logo from './logo.svg';
import './App.css';
import Title from '.components/Title.js'
import Description from './components/Description';
import TodayIs from '.components/TodayIs.js'
import Dropdown from '.components/Dropdown.js'
import On from '.components/On.js'
import Dropdown2 from '.components/Dropdown2.js'
import IamFeeling from '.components/IamFeeling.js'
import Emojis from '.components/Emojis.js'

function App() {
  return (
    <div>
       <Title HeaderContent="Know Thyself"/>
       <Description MessageContent="A mood tracking app designed to help you better recognize your emotions"/>
    </div>
  );
}

export default App;
