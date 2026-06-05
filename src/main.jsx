// src/main.jsx 내용 확인
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // 같은 src 폴더 안에 있을 때 정상 작동

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)