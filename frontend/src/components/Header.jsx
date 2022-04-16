import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
  }

  return (
    <nav className='navbar navbar-expand-sm bg-primary'>
        <div className="container-fluid">
        <div className='navbar-brand'>
            <Link to='/' className='nav-link text-white'><img src='./logo-navbar.png' alt='ADA Health logo' width="50" /> ADA Health</Link>
        </div>
        <div>
        <ul className="navbar-nav">
            {user ? (<li className='nav-item text-white'>
                <button onClick={onLogout}>
                    <FaSignOutAlt /> Cerrar Sesión
                </button>
            </li>) : (<div className='d-flex'><li className='nav-item'>
                <Link to='/login' className='nav-link text-white'>
                    <FaSignInAlt /> Iniciar Sesión
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/register' className='nav-link text-white'>
                    <FaUser /> Registrarse
                </Link>
            </li></div>)}
        </ul>
        </div>
        </div>
    </nav>
    /*<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>*/
  )
}

export default Header