import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js'
// import Description from './components/Description.js';
// import TodayIs from './components/TodayIs.js'
import DayofWeekForm from './components/DayofWeekForm.js'
import On from './components/On.js'
import TimeForm from './components/TimeForm.js';
import DateForm from './components/DateForm';
import FeelingForm from './components/FeelingForm';
//import Dropdown2 from './components/Dropdown2.js'
import IamFeeling from './components/IamFeeling.js'
//import Emojis from './components/Emojis.js'
import PastButton from './components/PastButton';
import InputMessage from './components/new';
import Emoji from './components/Emojis';

function App() {
  return (
    <div>
      
       <Title HeaderContent="Know Thyself"/>
       <InputMessage/>
       <Emoji/>
       <PastButton/>

    </div>
  );
}

export default App;
