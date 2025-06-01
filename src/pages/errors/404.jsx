import "./errors.css"

function NotFound() {
    return (
        <div className="center-container">
            <div className="error-message">
                <h1>404</h1>
                <p>La pagina que estas buscando no existe</p>
            </div>
        </div>
    );
}

export default NotFound;