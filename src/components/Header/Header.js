
import './Header.scss'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useLoginContext } from '../../context/LoginContext'
import Logo from '../../img/logo.svg'

function executeBtnBoton(e){
    e.preventDefault()
    const btn = document.getElementById("btnMenu")
    const elemento = document.getElementById("menu")
    let dataElement = elemento.getAttribute("data-element")
    var positionTop = btn.offsetTop + btn.offsetHeight
    console.log("positionTop", positionTop)
    if(dataElement === "false"){
        elemento.setAttribute("data-element","true")
        elemento.classList.remove('d-none')
        elemento.style.top = positionTop+"px"
    }
    else{
        elemento.setAttribute("data-element","false")
        elemento.classList.add('d-none')
    }
}

export const Header = () => {

    const {user, logout} = useLoginContext()

    return (
        <header className="bg-header container-fluid">
            <div className='row'>
                <div className='container-logo'>
                    <div id="logo">
                        <Link to="/"><img src={Logo} alt="Viajes Éxito"/></Link>
                    </div>
                </div>
                <div className='container-menu container-fluid'>
                    <div className='row'>
                        <div className='menu'>
                            <button id='btnMenu' onClick={executeBtnBoton}><i className="icon-menu"></i><span>Más opciones de viaje</span></button>
                            <nav className="d-none" id="menu" data-element="false">
                                <ul>
                                    <li>
                                        <Link to='/productos/vuelos' className="navlink"><i className="icon-avion"></i><span>Vuelos</span></Link>
                                    </li>
                                    <li>
                                        <Link to='/productos/hoteles' className="navlink"><i className="icon-hotel"></i><span>Hoteles</span></Link>
                                    </li>
                                    <li>
                                        <Link to='/productos/paquetes' className="navlink"><i className="icon-paquetes"></i><span>Paquetes</span></Link>
                                    </li>
                                    <li>
                                        <Link to='/nosotros' className="navlink"><i className="icon-personas"></i><span>Nosotros</span></Link>
                                    </li>
                                    <li>
                                        <Link to='/contacto' className="navlink"><i className="icon-servicio"></i><span>Contacto</span></Link>
                                    </li>
                                </ul>
                                
                            </nav>
                        </div>

                        <div className='content'>
                            <CartWidget  />
                            <div className='user'>
                                <p><span>Bienvenido:</span><span>{user.user}</span></p>
                                <button onClick={logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}