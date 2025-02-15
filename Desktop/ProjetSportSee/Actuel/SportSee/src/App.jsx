import './App.css'
import TopNavBar from './components/TopNavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Accueil from'./pages/Accueil'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
       
      </Routes>
    </Router>
    </>
  )
}

export default App
