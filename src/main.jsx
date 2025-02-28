import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HelloWorld} from './Primer.jsx'
import {Second} from './Second.jsx'
import {Third} from './Third.jsx'
import { CounterApp } from './CounterApp.jsx'
import { AppCounter } from './AppCounter.jsx'
import { SimpleForm } from './SimpleForm.jsx'

import { CustomHookLab4 } from './Component/CustomHookLab4.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterApp value = {21} counter = {21} ></CounterApp>
    <AppCounter></AppCounter>
    <SimpleForm></SimpleForm> */}
    <CustomHookLab4></CustomHookLab4>
  </StrictMode>
)
