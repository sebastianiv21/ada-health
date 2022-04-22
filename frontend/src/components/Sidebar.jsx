import { FaChartBar, FaChild, FaHospitalAlt, FaMicroscope, FaBars, FaHouseUser, FaAngleDown } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
    
function Sidebar() {
    return (
        <div className='container p-0 bg-primary' style={{width: "300px"}}>
            <div className='d-flex align-items-center border-bottom border-primary border-2 bg-light' style={{height: "60px"}}>
                <Link to='/' className='d-flex align-items-center btn btn-light text-primary p-0' style={{height: "58px"}}>
                    <img src='./logo-navbar.png' alt='ADA Health logo' width="50"/>
                    <div className='fw-bold ps-1'>
                        <p className='m-0'>ADA </p>
                        <p className='m-0'>Health</p>
                    </div>
                </Link>
                <div className="btn btn-primary ms-auto rounded-circle">
                    <FaBars className='text-white'/>
                </div>
            </div>
            <ul className='navbar-nav border-bottom border-light border-2'>
                <li className='btn btn-primary'>
                    <Link to='/' className='d-flex align-items-center nav-link text-white'>
                        <FaHouseUser className='me-1'/> Inicio
                    </Link>
                </li>
                <li className='btn btn-primary'>
                    <Link to='/' className='d-flex align-items-center nav-link text-white'>
                        <FaMicroscope className='me-1'/> Resultados
                    </Link>
                </li>
                <li className='btn btn-primary'>
                    <Link to='/' className='d-flex align-items-center nav-link text-white'>
                        <FaChartBar className='me-1'/> Estadísticas
                    </Link>
                </li>
                <li className='btn btn-primary'>
                    <button className='btn btn-primary d-flex align-items-center nav-link text-white w-100' 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseBienvenidos" 
                            aria-expanded="false" 
                            aria-controls="collapseBienvenidos">
                        <FaChild className='me-1'/> Bienvenidos
                        <FaAngleDown className='ms-auto'/>
                    </button>
                    <div className="collapse bg-primary" id="collapseBienvenidos">
                    <ul className="list-unstyled">
                        <li>
                            <Link to='/' className='nav-link text-white'>
                                Manual del paciente
                            </Link>
                        </li>
                        <li>
                        <Link to='/' className='nav-link text-white'>
                                Manual del empleado
                            </Link>
                        </li>
                        <li>
                        <Link to='/' className='nav-link text-white'>
                                Manual del médico
                            </Link>
                        </li>
                        <li>
                        <Link to='/' className='nav-link text-white'>
                                Manual del administrador
                            </Link>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className='btn btn-primary'>
                    <button className='btn btn-primary d-flex align-items-center nav-link text-white w-100' 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseDptoHuila" 
                            aria-expanded="false" 
                            aria-controls="collapseDptoHuila">
                        <FaHospitalAlt className='me-1'/> Departamento del Huila
                        <FaAngleDown className='ms-auto'/>
                    </button>
                    <div className="collapse bg-primary" id="collapseDptoHuila">
                    <ul className="list-unstyled">
                <li>
                    <a className='nav-link text-white' target="_blank" href="https://www.huila.gov.co/salud/">Secretaria de salud del huila</a>
                </li>
                <li>
                    <a className='nav-link text-white' target="_blank" href="https://www.huila.gov.co/">Gobernación del Huila</a>
                </li>
                <li>
                    <a className='nav-link text-white' target="_blank" href="https://www.minsalud.gov.co">Ministerio de salud</a>
                </li>
            </ul>
            </div>
                </li>
            </ul>
            <div className='mx-2 my-3'>
                <div className='bg-secondary text-white text-center rounded-top'>
                    <h6 className='m-0 pt-2'>Secretaría de Salud</h6>
                    <h6 className='m-0 pb-2'>Departamento del Huila</h6>
                </div>
                <img className='img-fluid rounded-bottom' src='./minsalud.png' alt='minsalud'/>
            </div>
        </div>
    )
}
    
export default Sidebar