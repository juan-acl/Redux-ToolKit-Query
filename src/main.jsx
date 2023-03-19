import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { apiSlice } from './api/apiSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice} > {/* api es una instancia de donde van a estar las peticiones HTTP. */}
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
