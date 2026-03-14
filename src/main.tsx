import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 오류 발생 시 사용할 코드
alert('현재 오류 수정 중입니다. 이용에 불편을 드려 죄송합니다. I am currently correcting the error. I apologize for the inconvenience.')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
