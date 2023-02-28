import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './screens/landing'
import Login from './screens/login'
import Signup from './screens/signup'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
