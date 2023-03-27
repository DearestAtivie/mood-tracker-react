import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js'
import Description from './components/Description.js';
import TodayIs from './components/TodayIs.js'
import Dropdown1 from './components/Dropdown1.js'
import On from './components/On.js'
import Dropdown2 from './components/Dropdown2.js';
//import Dropdown2 from './components/Dropdown2.js'
//import IamFeeling from './components/IamFeeling.js'
//import Emojis from './components/Emojis.js'

function App() {
  return (
    <div>
       <Title HeaderContent="Know Thyself"/>
       <Description MessageContent="A mood tracking app designed to help you better recognize your emotions"/>
       <TodayIs MessageContent="Today Is"/>
       <Dropdown1/>
       <On MessageContent="On"/>
       <Dropdown2/>

    </div>
  );
}

export default App;
