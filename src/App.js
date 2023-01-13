
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NewCars from './components/newCars/NewCars';
import UsedCars from './components/usedCars/UsedCars';
import Compare from './components/compare/Compare';
import Sell from './components/sell/Sell';
import CarsLayout from './components/carsLayout/CarsLayout';
import AppContext from './AppContext/AppContext';




function App() {
  return (
    <BrowserRouter>
      <div>
        <AppContext>
          <Routes>
              <Route path='/nalydrey/' element={<CarsLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='new_cars' element={<NewCars/>}/>
                <Route path='used_cars' element={<UsedCars/>}/>
                <Route path='compare' element={<Compare/>}/>
                <Route path='sell' element={<Sell/>}/>
              </Route>
          </Routes>  
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
