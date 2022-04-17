import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {VideoProvider} from "./context/VideoContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <VideoProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </VideoProvider>
)
