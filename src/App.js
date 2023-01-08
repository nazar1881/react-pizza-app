import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import AboutUs from './components/AboutUs/AboutUS';
import Shaurmas from './components/Shaurmas/Shaurmas';
import Orders from './components/Orders/Orders';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
      <Header/>
      <Routes>
        <Route path="shaurmas" element={<Shaurmas/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="orders" element={<Orders/>}/>
      </Routes>
      </div>
    </BrowserRouter>
      
  )
}

export default App;
