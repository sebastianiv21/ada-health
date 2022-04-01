import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section>
                <h1>
                    <FaSignInAlt /> Iniciar Sesión
                </h1>
                <p>Digite sus credenciales</p>
            </section>

            <section>
                <form onSubmit={onSubmit}>
                    <div>
                        <p>Correo electrónico</p>
                        <input type='text' id='email' name='email' value={email} placeholder='Ingrese su correo electrónico' onChange={onChange} />
                    </div>
                    <div>
                        <p>Contraseña</p>
                        <input type='password' id='password' name='password' value={password} placeholder='Ingrese una contraseña' onChange={onChange} />
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </section>
        </>
  )
}

export default Login