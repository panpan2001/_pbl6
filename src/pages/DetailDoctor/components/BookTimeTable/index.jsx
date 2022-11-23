import React from 'react'
import {
    BsFillCalendarFill
} from 'react-icons/bs'
import './index.scss'
import TimeTableItem from './TimeTableItem'
import SelectOption from 'components/SelectOption'

function BookTimeTable({ doctor }) {
    return (
        <div className="bookTimeTable">
            <div className="bookTimeTable__container">
                <div className="bookTimeTable__bookDay">
                    <header><span><BsFillCalendarFill /></span>Lịch khám</header>
                    <div className="bookTimeTable__bookDay-time">
                        <SelectOption />
                    </div>
                    <ul className="bookTimeTable__bookDay-list">
                        <TimeTableItem />
                        <TimeTableItem />
                        <TimeTableItem />
                        <TimeTableItem />
                        <TimeTableItem />
                        <TimeTableItem />
                        <TimeTableItem />
                        <TimeTableItem />
                        <TimeTableItem />
                    </ul>
                </div>
                <div className="bookTimeTable__outside">
                    <span className="address_doctor">
                        <header>Địa chỉ khám</header>
                        <span>
                            {doctor.clinic.street} {doctor.clinic.city}
                        </span>
                    </span>
                    <span className="price">
                        <span>Giá khám: </span> 300.000đ
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BookTimeTable
