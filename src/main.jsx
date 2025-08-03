import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './router/router.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



// Create a client
const queryClient = new QueryClient()




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

    <Toaster position="top-center">
    </Toaster>
  </StrictMode>,
)
