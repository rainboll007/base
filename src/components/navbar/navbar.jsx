import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(params) {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar-bg">
            <div className="container-fluid">
                <div className="d-flex align-items-center custom-left-section">
                    <a className="navbar-brand text-white align-items-center" href="#">
                        <img src="https://framework-gb.cdn.gob.mx/gobmx/img/logo_blanco.svg" alt="Logo Educación" />
                        <div className='gold-box'></div>
                    </a>
                </div>

                <div className="d-flex flex-grow-1 align-items-center justify-content-center custom-middle-section">
                    <a className="navbar-brand text-dark me-auto me-lg-0" href="#">
                        <img src="https://www.gob.mx/cms/uploads/image/file/711331/usicamm-logo2.png" alt="Logo USICAMM" />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
                        <li className="nav-item dropdown ms-3">
                            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon="fa-regular fa-circle-user" /> Gerardo Miranda
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownUser">
                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                <li><a className="dropdown-item" href="#">Configuración</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item me-2">
                            <button className="btn btn-outline-secondary custom-outline-btn rounded-pill px-4" type="button">Menú</button>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link text-dark" href="#">Trámites</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-dark" href="#">Gobierno</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-dark" href="#"><i className="fas fa-search"></i></a>
                        </li>
                        <li className="nav-item me-2 flag">
                            <a className="nav-link" href="#">
                                <img src="https://flagicons.lipis.dev/flags/4x3/mx.svg" alt="Bandera México" />
                            </a>
                        </li>
                        <li className="nav-item me-3 flag">
                            <a className="nav-link" href="#">
                                <img src="https://flagicons.lipis.dev/flags/4x3/jp.svg" alt="Bandera Japón" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;