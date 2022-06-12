
import React from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppRoutes from 'AppRoutes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
