import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyBlogProvider } from './context/BlogContext.jsx'
import MyApplicationRoutes from './routes/MyApplicationRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <MyBlogProvider>
    <MyApplicationRoutes />
  </MyBlogProvider>
)
