import React, { useState,useEffect } from 'react';
import './listAppointment.scss';
import axios from 'axios';
function TableHeader() {
    return (
        <thead>
            <tr>
                <th>Id bệnh nhân</th>
                <th>Id lịch hẹn</th>
                <th>Ngày tháng</th>
                <th>Triệu chứng</th>
                <th>Trạng thái cuộc hẹn</th>
                <th>Giá tiền</th>
            </tr>
        </thead>
    )
}
function TableBody() {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        getAppointment();
    }, []);
    const getAppointment = () => {
        axios
            .get('http://localhost:3001/doctor/')
            .then(data => {
                console.log(data);
                setAppointments(data.data);
            })
            .catch(err => alert(err));
    }
    return (
        <React.Fragment>
            <tbody>
                {appointments.map((ap,id) => (
                    <tr key={id}>
                        <td>{ap.patient_id}</td>
                        <td>{ap.schedule_id}</td>
                        <td>{ap.date}</td>
                        <td>{ap.symptoms}</td>
                        <td>{ap.status_id}</td>
                        <td>{ap.cost}</td>
                    </tr>
                ))}
            </tbody>

        </React.Fragment>)
}


function TableButton() {
    return (
        <div className='table_button' >
            <form className='form ' id='table_form_appointment' action=''>
                <input className='text_search_appointment' type='text' placeholder='Search..' name='search' />
                <button type='submit'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                        <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                    </svg>
                </button>
            </form>

        </div>
    )
}
function ListAppointment() {
    return (
        <div className='container' id='con_Content_table'>
            <div className='table_col_appointment' >
            <div className='table_title'>
            <h1 >Quản lí lịch hẹn </h1>
        </div>
                <TableButton />
                <table className='table_show'>
                    <TableHeader />
                    <TableBody />
                </table>
            </div>
        </div>


    );
}

export default ListAppointment