import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HelloWorld} from './Primer.jsx'
import {Second} from './Second.jsx'
import {Third} from './Third.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld></HelloWorld>
    <Second></Second>
    <Third></Third>
  </StrictMode>,
)
