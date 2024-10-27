import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { GlobalProvider } from './components/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GlobalProvider> */}
      <App className="relative"/>
  {/* </GlobalProvider> */}
  </React.StrictMode>,
)