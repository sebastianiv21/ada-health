import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
    const [ formData, setFormData ] = useState({
        identification_type: '',
        identification: '',
        name: '',
        lastname: '',
        sec_lastname: '',
        date_of_birth: new Date(),
        gender: '',
        blood_type: '',
        rh: '',
        marital_status: '',
        EPS: '',
        home_phone: '',
        mobile_phone: '',
        work_phone: '',
        address: '',
        city: '',
        department: '',
        role: '',
        email: '',
        password: '',
        password2: '',
        contact_name: '',
        contact_lastname: '',
        contact_sec_lastname: '',
        contact_relationship: '',
        contact_phone: '',
    })

    const { identification_type, identification, name, lastname, sec_lastname,
        date_of_birth, gender, blood_type, rh, marital_status, EPS,
        home_phone, mobile_phone, work_phone, address, city, department,
        role, email, password, password2,
        contact_name, contact_lastname, contact_sec_lastname, contact_relationship, contact_phone } = formData

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
        } else if (password.length < 4){
            toast.error('La contraseña debe tener al menos 4 caracteres')
        } else {
            const userData = {
                identification_type, identification, name, lastname, sec_lastname,
                date_of_birth, gender, blood_type, rh, marital_status, EPS,
                home_phone, mobile_phone, work_phone, address, city, department,
                role, email, password,
                contact_name, contact_lastname, contact_sec_lastname, contact_relationship, contact_phone
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='container-fluid'>
            <section className='d-flex justify-content-center mt-5'>
                <h1 className='text-primary fw-bold fs-3'>
                    <FaUser className='text-primary'/> Registrarse
                </h1>
            </section>
            <section className='d-flex justify-content-center mt-3'>
                <form className='mx-auto' onSubmit={onSubmit}>
                    <h4 className="text-center text-dark fw-bold mt-0 mb-1 fs-5">Información personal</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <select className="form-select" id="identification_type" name="identification_type" value={identification_type} onChange={onChange}>
                                    <option value>Seleccionar...</option>
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
                                <label htmlFor="identification_type">Tipo de Documento *</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='identification' name='identification' value={identification} placeholder='Ingrese su número de identificación' onChange={onChange} />
                                <label htmlFor="identification">Número de Identificación *</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='name' name='name' value={name} placeholder='Ingrese su nombre' onChange={onChange} />
                                <label htmlFor="name">Nombre(s) *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='lastname' name='lastname' value={lastname} placeholder='Ingrese su primer apellido' onChange={onChange} />
                                <label htmlFor="lastname">Primer Apellido *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='sec_lastname' name='sec_lastname' value={sec_lastname} placeholder='Ingrese su segundo apellido' onChange={onChange} />
                                <label htmlFor="sec_lastname">Segundo Apellido</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center text-dark fw-bold mt-0 mb-1 fs-5">Información general</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="date" className="form-control" id='date_of_birth' name='date_of_birth' value={date_of_birth} placeholder='Seleccione su fecha de nacimiento' onChange={onChange} />
                                <label htmlFor="date_of_birth">Fecha de Nacimiento *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <select className='form-select'id="gender" name="gender" value={gender} onChange={onChange}>
                                    <option value>Seleccionar...</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                                <label htmlFor="gender">Género *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <select className='form-select' id="marital_status" name="marital_status" value={marital_status} onChange={onChange}>
                                    <option value>Seleccionar...</option>
                                    <option value="Soltero">Soltero/a</option> 
                                    <option value="Casado">Casado/a</option>  
                                    <option value="UnionLibre">Unión libre</option>
                                    <option value="Divorciado">Divorciado/a</option>
                                    <option value="Separado">Separado/a</option> 
                                    <option value="Viudo">Viudo/a</option> 
                                </select>
                                <label htmlFor="marital_status">Estado Civil</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <select className='form-select' id='blood_type' name='blood_type' value={blood_type} onChange={onChange}>
                                    <option value>Seleccionar...</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                </select>
                                <label htmlFor="blood_type">Tipo de Sangre *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <select className='form-select' id='rh' name='rh' value={rh} onChange={onChange}>
                                    <option value>Seleccionar...</option>
                                    <option value="Positivo">Positivo</option>
                                    <option value="Negativo">Negativo</option>
                                </select>
                                <label htmlFor="rh">RH *</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='EPS' name='EPS' value={EPS} placeholder='Ingrese su EPS' onChange={onChange} />
                                <label htmlFor="EPS">EPS *</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center text-dark fw-bold mt-0 mb-1 fs-5">Datos de localización</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='home_phone' name='home_phone' value={home_phone} placeholder='Ingrese su teléfono fijo' onChange={onChange} />
                                <label htmlFor="home_phone">Teléfono fijo</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='mobile_phone' name='mobile_phone' value={mobile_phone} placeholder='Ingrese su teléfono celular' onChange={onChange} />
                                <label htmlFor="mobile_phone">Teléfono celular</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='work_phone' name='work_phone' value={work_phone} placeholder='Ingrese su teléfono del trabajo' onChange={onChange} />
                                <label htmlFor="work_phone">Teléfono del trabajo</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='address' name='address' value={address} placeholder='Ingrese su dirección' onChange={onChange} />
                                <label htmlFor="address">Dirección</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='city' name='city' value={city} placeholder='Ingrese su ciudad' onChange={onChange} />
                                <label htmlFor="city">Ciudad</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='department' name='department' value={department} placeholder='Ingrese su departamento' onChange={onChange} />
                                <label htmlFor="department">Departamento</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center text-dark fw-bold mt-0 mb-1 fs-5">Información de la sesión</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <select className='form-select' id='role' name='role' value={role} onChange={onChange}>
                                    <option value>Seleccionar...</option>
                                    <option value="Paciente">Paciente</option>
                                    <option value="Empleado">Empleado</option>
                                    <option value="Medico">Médico</option>
                                    <option value="Admin">Administrador de la plataforma</option>
                                </select>
                                <label htmlFor="role">Rol *</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Ingrese su correo electrónico' onChange={onChange} />
                                <label htmlFor="email">Correo electrónico *</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Ingrese una contraseña' onChange={onChange} />
                                <label htmlFor="password">Contraseña *</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="password2" name='password2' value={password2} placeholder='Confirmar contraseña' onChange={onChange} />
                                <label htmlFor="password2">Confirmar contraseña *</label>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center text-dark fw-bold mt-0 mb-1 fs-5">Información de contacto</h4>
                    <div className="row g-2 mb-2">
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type="text" className="form-control" id='contact_name' name='contact_name' value={contact_name} placeholder='Ingrese nombres del contacto' onChange={onChange} />
                                <label htmlFor="contact_name">Nombre(s) del contacto</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type='text' className="form-control" id='contact_lastname' name='contact_lastname' value={contact_lastname} placeholder='Ingrese primer apellido del contacto' onChange={onChange} />
                                <label htmlFor="contact_lastname">Primer apellido</label>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-floating">
                                <input type='text' className="form-control" id='contact_sec_lastname' name='contact_sec_lastname' value={contact_sec_lastname} placeholder='Ingrese segundo apellido del contacto' onChange={onChange} />
                                <label htmlFor="contact_sec_lastname">Segundo apellido</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="contact_relationship" name='contact_relationship' value={contact_relationship} placeholder='Ingrese relación o parentezco del contacto' onChange={onChange} />
                                <label htmlFor="contact_relationship">Relación o parentezco</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="contact_phone" name='contact_phone' value={contact_phone} placeholder='Ingrese teléfono del contacto' onChange={onChange} />
                                <label htmlFor="contact_phone">Teléfono del contacto</label>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mb-4'>
                        <button type="submit" className="btn btn-primary text-white">Crear Usuario</button>
                    </div>
                </form>
            </section>
        </div>
  )
}

export default Register