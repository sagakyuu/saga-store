import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/pages/app'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/styles/globals.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
