import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import AboutUs from './components/AboutUs/AboutUS';
import Shaurmas from './components/Shaurmas/Shaurmas';
import Orders from './components/Orders/Orders';
import ShaurmaDetailsConteiner from './components/Shaurmas/ShaurmaDetailsConteiner';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import MainContent from './components/MainContent/MainContent';
import Drinks from './components/Drinks/Drinks';

const shaurmasURL = "http://localhost:3000/shaurmas";
const derinksURL = "http://localhost:3000/drinks";

function App() {

    let [shaurmas, setShaurmas] = useState([]);
    let [drinks, setDrinks] = useState([]);
    let [isLoading, setLoading] = useState(true);
    let dispatch = useDispatch();

    let setShaurmasToReducer = (shaurmas) => {
        dispatch({type:"SET_SHAURMAS", payload: shaurmas})
    }

    let setDrinksToReduce = (drinks) => {
      dispatch({type:"SET_DRINKS", payload: drinks})
    }

    useEffect(() => {
        axios.get(shaurmasURL)
        .then(responce => {
            setShaurmas(responce.data);
            setShaurmasToReducer(responce.data);
            //console.log(responce.data);
            setLoading(false);
        })
        axios.get(derinksURL)
        .then(responce => {
          setDrinks(responce.data);
          setDrinksToReduce(responce.data);
          setLoading(false);
        })
    }, [])

  return (
    <BrowserRouter>
      <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<MainContent/>}/>
        <Route path="shaurmas" element={<Shaurmas shaurmas={shaurmas} isLoading={isLoading}/>}/>
        <Route path="drinks" element={<Drinks drinks={drinks} isLoading={isLoading}/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="shaurmas/shaurma-details/:shaurmaId" element={<ShaurmaDetailsConteiner shaurmas={shaurmas}/>}/>
      </Routes>
      </div>
    </BrowserRouter>
      
  )
}

export default App;
