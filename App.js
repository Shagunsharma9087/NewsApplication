import logo from './logo.svg';
import './App.css';
import './Navigation.css'
import './Sports.css'
import Navigation from './Navigation';
import Technology from'./Technology';
import Entertainment from './Entertainment';
import Sports from './Sports';
import Business from './Business';
import General from './General';
import Health from './Health';
import ReactDOM from "react-dom/client";
import './Newsgrid.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
 
function App() {
  return (
    <div className="App">
      <header>
        <h1>Today News</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={< General/>} />
          <Route path="Business" element={<Business/>} />
          <Route path="Entertainment" element={<Entertainment/>} />
          <Route path="Sports" element={<Sports Items/>} />
          <Route path="Technology" element={<Technology />} />
          <Route path="Health" element={<Health/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
