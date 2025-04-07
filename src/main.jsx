import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import App from './app/app.jsx'
import BDFS from './pages/bdfs.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="bdfs" element={<BDFS />}></Route>
      <Route path="bt" element={<BDFS />}></Route>
      <Route path="bst" element={<BDFS />}></Route>
    </Routes>
  </BrowserRouter>
);