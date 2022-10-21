import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddPlant from './pages/AddPlant'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route
          path='/'
          element={<Home />}
          />
          <Route
          path='/add-plant'
          element={<AddPlant />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
