import { BrowserRouter, data, Route, Routes } from "react-router";
import { useState } from 'react'
import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./widgets/Layout/Layout";

function App() {
const data = []
async function getData(){
  const response = await fetch('/')
  const data = await response.json()
  return data
} 

getData().then(res=> data.push(res))
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage data={data}/>} />
          {/* <Route path='/game' element={<GamePage />} />
          <Route path='/win ' element={<WinPage />} /> */}
        </Route>
        <Route path='*' element={<>ВЫ кто такие, я вас не звал</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
