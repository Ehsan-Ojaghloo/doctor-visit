import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Register from './pages/Register.jsx'
import "./index.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/sign' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
