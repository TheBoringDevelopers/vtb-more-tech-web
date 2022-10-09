import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { App } from './app'
import { BrowserRouter } from 'react-router-dom';

const reactRoot = createRoot(
  document.getElementById('root')!,
)

reactRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
