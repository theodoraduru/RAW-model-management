import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Landing from './routes/Landing'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/landing' element={<Landing />} />

    </Routes>
      
    </>
  );
}

export default App;