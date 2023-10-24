import { Route, Routes } from 'react-router-dom'
import { Auth } from './pages/Auth'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  )
}
