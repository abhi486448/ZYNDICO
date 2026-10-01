import React from 'react'
import AppRouter from './AppRouter'
import './Features/shared/global.scss'
import { AuthProvider } from './Features/Auth/Auth.context'

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
    
  )
}

export default App