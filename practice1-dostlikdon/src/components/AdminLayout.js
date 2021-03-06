import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AdminLayout extends Component {
    render() {
        return (
            <div className="admin-layout">
                <div className="admin-navbar"></div>

                <div className="admin-content d-flex">
                    <div className="admin-content-left">
                        <div className="d-flex align-items-center">
                            <div className="user-image mr-3">
                                <span className="icon icon-user"/>
                            </div>
                            <div>
                                <h5 className="mb-0">Abbosjon Nosirov</h5>
                                <p className="mb-0">Adminstrator</p>
                            </div>
                        </div>

                        <ul className="nav flex-column mt-4">
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Yangiliklar</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Menular</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Menular</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Menular</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Menular</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/admin">Menular</Link></li>
                        </ul>


                    </div>
                    <div className="admin-content-right">

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;