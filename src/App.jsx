import React from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Add from './pages/add/add'
import Details from './pages/details/details'


const App = () => {
  
  return (
    <div className='app'>
      <Navbar/>
     
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
        <Route path='/edit/:id' element={<Add/>}></Route>
        <Route path='/add' Component={Add}></Route>
      </Routes>
      
    </div>
  );
};

export default App
