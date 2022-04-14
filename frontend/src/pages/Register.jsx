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
        <div className='container-fluid'>
            <section className='d-flex justify-content-center'>
                <h1 className='text-primary'>
                    <FaUser className='FaUser'/> Registrarse
                </h1>
            </section>

            <section className='d-flex justify-content-center mt-3'>
                <form className='mx-auto' onSubmit={onSubmit}>
                    <h4 className="text-center mt-0 mb-1">Información personal</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                    <option selected>Seleccionar...</option>
                                    <option value="Cedula">Cédula de Ciudadanía</option>
                                    <option value="Cedula_extranjeria">Cédula de Extranjería</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                    <option value="Tarjeta_identidad">Tarjeta de identidad</option>
                                    <option value="Registro_civil">Registri civil</option>
                                    <option value="Carnet_diplomatico">Carné diplomático</option>
                                    <option value="Salvoconducto">Salvoconducto</option>
                                    <option value="Perm_especial_permanencia">Permiso especial de permanencia</option>
                                    <option value="Documento_extranjero">Documento extranjero</option>
                                    <option value="Sin_identificacion">Sin identificación</option>
                                </select>
                                <label for="floatingSelectGrid">Tipo de Documento *</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Número de Identificación *</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='name' name='name' value={name} placeholder='Ingrese su nombre' onChange={onChange} />
                                <label for="name">Nombre(s) *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Primer Apellido *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Segundo Apellido</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center mt-0 mb-1">Información general</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="date" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Fecha de Nacimiento *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <select className='form-select'>
                                    <option selected>Seleccionar...</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                                <label for="floatingInputGrid">Género *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <select className='form-select'>
                                    <option selected>Seleccionar...</option>
                                    <option value="Soltero">Soltero/a</option> 
                                    <option value="Casado">Casado/a</option>  
                                    <option value="UnionLibre">Unión libre</option>
                                    <option value="Divorciado">Divorciado/a</option>
                                    <option value="Separado">Separado/a</option> 
                                    <option value="Viudo">Viudo/a</option> 
                                </select>
                                <label for="floatingInputGrid">Estado Civil</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <select className='form-select'>
                                    <option selected>Seleccionar...</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                </select>
                                <label for="floatingInputGrid">Tipo de Sangre *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <select className='form-select'>
                                    <option selected>Seleccionar...</option>
                                    <option value="Positivo">Positivo</option>
                                    <option value="Negativo">Negativo</option>
                                </select>
                                <label for="floatingInputGrid">RH *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">EPS *</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center mt-0 mb-1">Datos de localización</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Teléfono fijo</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Teléfono celular</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Teléfono del trabajo</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Dirección</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Ciudad</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Departamento</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center mt-0 mb-1">Información de la sesión</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <select className='form-select'>
                                    <option selected>Seleccionar...</option>
                                    <option value="Paciente">Paciente</option>
                                    <option value="Empleado">Empleado</option>
                                    <option value="Medico">Médico</option>
                                    <option value="Admin">Administrador de la plataforma</option>
                                </select>
                                <label for="floatingInputGrid">Rol *</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Ingrese su correo electrónico' onChange={onChange} />
                                <label for="email">Correo electrónico *</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Ingrese una contraseña' onChange={onChange} />
                                <label for="password">Contraseña *</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="password2" name='password2' value={password2} placeholder='Confirmar contraseña' onChange={onChange} />
                                <label for="password2">Confirmar contraseña *</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center mt-0 mb-1">Información de contacto</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Nombre(s) del contacto</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Primer apellido</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Segundo apellido</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Relación o parentezco</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputGrid" placeholder="Ingrese número de identificación" value="" />
                                <label for="floatingInputGrid">Teléfono del contacto</label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mb-4'>
                        <button type="submit" class="btn btn-primary text-white">Enviar</button>
                    </div>
                </form>
            </section>
        </div>
  )
}

export default Register