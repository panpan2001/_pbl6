import { path } from 'constants/path'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

function TimeTableItem() {
    const navigate = useNavigate()
    return (
        <li className="timeTableItem" onClick={() => navigate(path.bookAppointment)}>
            <span>6:30 - 7:30</span>
        </li>
    )
}

export default TimeTableItem
