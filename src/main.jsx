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
      <Route path="B-DFS" element={<BDFS />}></Route>
      <Route path="Backtracking" element={<BDFS />}></Route>
      <Route path="BST" element={<BDFS />}></Route>
    </Routes>
  </BrowserRouter>
);