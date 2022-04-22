import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div>
    <Router>
    <div className='d-flex w-100 min-vh-100'>
      <Sidebar />
      <div className='w-100 m-0 p-0'>
      <Header />
      <Routes>
        <Route path='/' element={ <Dashboard /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
      </div>
    </div>
    </Router>
    <ToastContainer />
    </div>
  );
}

export default App;
