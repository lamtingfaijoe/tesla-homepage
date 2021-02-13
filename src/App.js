import './App.css';
import Header from './components/Header';
import ModelY from './assets/Desktop-ModelY.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import SolarRoof from  './assets/Desktop-SolarRoof.jpeg'
import Accessories from './assets/Desktop-Accessories.jpg'
import Item from './components/Item'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item 
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarntee"
        descLink=''
        backgroundImg={SolarRoof}
        leftBtnTxt=''
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
        <Item 
        title="Model S"
        desc="Money-back guarntee"
        descLink=''
        backgroundImg={ModelS}
        leftBtnTxt=''
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
        <Item 
        title="Model Y"
        desc="Money-back guarntee"
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt=''
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
        <Item 
        title="Model X"
        desc="Money-back guarntee"
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt=''
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
        <Item 
        title="Model 3"
        desc="Money-back guarntee"
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt=''
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />
      </div>

    </div>
  );
}

export default App;
