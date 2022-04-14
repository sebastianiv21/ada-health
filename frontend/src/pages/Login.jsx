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
        <div className='container-fluid'>
            <section className='d-flex justify-content-center'>
                <h1 className='text-primary'>
                    <FaSignInAlt className='FaSignInAlt'/> Iniciar Sesión
                </h1>
            </section>

            <section className='d-flex justify-content-center mt-3'>
                <form className='mx-auto' style={{width: "400px"}} onSubmit={onSubmit}>
                    <div className='form-floating mb-3'>
                        <input className='form-control' type='text' id='email' name='email' value={email} placeholder='Ingrese su correo electrónico' onChange={onChange} />
                        <label htmlFor="email" className='form-label'>Correo electrónico</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input className='form-control' type='password' id='password' name='password' value={password} placeholder='Ingrese su contraseña' onChange={onChange} />
                        <label htmlFor="password" className='form-label'>Contraseña</label>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" class="btn btn-primary text-white">Enviar</button>
                    </div>
                </form>
            </section>
        </div>
  )
}

export default Login