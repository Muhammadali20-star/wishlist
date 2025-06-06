import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Suspense>
    <Provider store={store}>
    <App />
  </Provider>
    </Suspense>
  </BrowserRouter>
  // </React.StrictMode>,
)
