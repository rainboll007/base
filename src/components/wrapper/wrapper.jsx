import { Navbar, RigthMenu, LeftMenu } from "../navbar";
import AppRouter from "../../config/router";
import './wrapper.css'

function Wrapper(params) {
    return (
        <div className="main-container">
            <Navbar />
            <div className='wrapper'>
                <LeftMenu />
                <div className="page">
                    <AppRouter />
                </div>
                <RigthMenu />
            </div>
        </div>
    );
}

export default Wrapper;