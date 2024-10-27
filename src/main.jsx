import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context, {StateContext} from './Context/Context.jsx'
import {RouterProvider} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Context>
  <App />
  </Context>
  </StrictMode>,
)
