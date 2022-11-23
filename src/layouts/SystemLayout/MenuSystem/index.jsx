import React from 'react'
import { path } from 'constants/path'
import { NavLink } from 'react-router-dom'
import './index.scss'

function MenuSystem() {
    return (
        <ul className="menuSystem">
            <li className="menuSystem-item">
                <NavLink to={path.clinicManagement} className = "menuSystem-item-link">
                    Quản lí Phòng khám
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink to={path.specialistManagement} className = "menuSystem-item-link">
                    Quản lí Chuyên khoa
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink to={path.hospitalManagement} className = "menuSystem-item-link">
                    Quản lí Bệnh viện
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink to={path.patientManagement} className = "menuSystem-item-link">
                    Quản lí Bệnh nhân
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink to={path.doctorManagement} className = "menuSystem-item-link">
                    Quản lí Bác sĩ
                </NavLink>
            </li>
        </ul>
    )
}

export default MenuSystem