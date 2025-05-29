import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LeftMenu() {
    return (
        <div className="left-menu">
            <ul className='menu-list'>
                <li>
                    <FontAwesomeIcon icon="fa-regular fa-building" />
                    <span>Inicio</span>
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-regular fa-circle-play" />
                    <span>Contacto</span>
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-regular fa-file" />
                    <span>Convocatorias</span>
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-regular fa-keyboard" />
                    <span>Configuración</span>
                </li>
            </ul>
        </div>
    );
}

export default LeftMenu;