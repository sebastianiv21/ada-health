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
    <header>
        <div>
            <Link to='/'>ADA Health</Link>
        </div>
        <ul>
            {user ? (<li>
                <button onClick={onLogout}>
                    <FaSignOutAlt /> Cerrar Sesión
                </button>
            </li>) : (<><li>
                <Link to='/login'>
                    <FaSignInAlt /> Iniciar Sesión
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Registrarse
                </Link>
            </li></>)}
            
        </ul>
    </header>
  )
}

export default Header