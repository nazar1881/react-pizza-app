import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import AboutUs from './components/AboutUs/AboutUS';
import Shaurmas from './components/Shaurmas/Shaurmas';
import Orders from './components/Orders/Orders';

function App() {
    let shaurmas = [{
      id: 1,
      name: "Гавайська",
      price: 100, 
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 2,
      name: "Куряча",
      price: 80,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 3,
      name: "Цезар",
      price: 95,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 4,
      name: "BBQ",
      price: 110,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 5,
      name: "Вегетаріанська",
      price: 50,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    },{
      id: 6,
      name: "Гавайська",
      price: 100, 
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 7,
      name: "Куряча",
      price: 80,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 8,
      name: "Цезар",
      price: 95,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 9,
      name: "BBQ",
      price: 110,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 10,
      name: "Вегетаріанська",
      price: 50,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    },{
      id: 11,
      name: "Гавайська",
      price: 100, 
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 12,
      name: "Куряча",
      price: 80,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 13,
      name: "Цезар",
      price: 95,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 14,
      name: "BBQ",
      price: 110,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }, {
      id: 15,
      name: "Вегетаріанська",
      price: 50,
      img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"
    }]
  

  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
      <Routes>
        <Route path="shaurmas" element={<Shaurmas shaurmas={shaurmas}/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="orders" element={<Orders/>}/>
      </Routes>
      </div>
    </BrowserRouter>
      
  )
}

export default App;
