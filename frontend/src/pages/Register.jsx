import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

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

        if (password !== password2) {
            toast.error('Las contraseñas no coinciden')
        } else {
            const userData = {
                name, 
                email, 
                password,
            }

            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section>
                <h1>
                    <FaUser /> Registrarse
                </h1>
                <p>Por favor cree una cuenta</p>
            </section>

            <section>
                <form onSubmit={onSubmit}>
                    <div>
                        <p>Nombre</p>
                        <input type='text' id='name' name='name' value={name} placeholder='Ingrese su nombre' onChange={onChange} />
                    </div>
                    <div>
                        <p>Correo electrónico</p>
                        <input type='text' id='email' name='email' value={email} placeholder='Ingrese su correo electrónico' onChange={onChange} />
                    </div>
                    <div>
                        <p>Contraseña</p>
                        <input type='password' id='password' name='password' value={password} placeholder='Ingrese una contraseña' onChange={onChange} />
                    </div>
                    <div>
                        <p>Confirmar contraseña</p>
                        <input type='password' id='password2' name='password2' value={password2} placeholder='Confirmar contraseña' onChange={onChange} />
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </section>
        </>
  )
}

export default Register