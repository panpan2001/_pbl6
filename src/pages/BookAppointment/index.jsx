import React from 'react'
import images from 'assets'
import './index.scss'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import InputField from 'components/InputFiled'
import { FaUser } from 'react-icons/fa'
import RadioGroup from 'components/RadioGroup'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import {
    BsFillCalendarFill,
    BsFillTelephoneFill
} from 'react-icons/bs'
import { AiFillPlusCircle } from 'react-icons/ai'

function BookAppointment() {
    const userData = useSelector(state => state.user.profile)

    const form = useForm({
        defaultValues: {
            phoneNumber: userData.phoneNumber,
            email: userData.email,
            firsname: userData.firsname,
            lastname: userData.lastname,
            gender: userData.gender === true ? '1' : '0',
            birthday: userData.birthday.split('T')[0],
            address: userData.address,
            reason: ''
        }
    })
    return (
        <div className="bookAppointment">
            <div className="bookAppointment__container">
                <header className="bookAppointment__Info">
                    <div className="bookAppointment__Info-img">
                        <img src={images.doctorEx} alt="bacsi" />
                    </div>
                    <div className="bookAppointment__Info-content">
                        <span>Đặt lịch khám</span>
                        <span>
                            Phó giáo sư, Tiến Sĩ, Bác sĩ CK II Nguyễn
                            Văn Quýnh
                        </span>
                        <span>
                            06:30 - 07:00 - Thứ 2 - 19/09/2022
                        </span>
                    </div>
                </header>
                <form className="form">
                    <div className="form__element-two-input">
                        <div>
                            <InputField
                                name="firsname"
                                type="input"
                                form={form}
                                placeholder="Họ"
                                disabled={true}
                                icon={<FaUser />}
                            />
                        </div>
                        <div>
                            <InputField
                                name="lastname"
                                type="input"
                                form={form}
                                placeholder="Tên"
                                disabled={true}
                                icon={<FaUser />}
                            />
                        </div>
                    </div>
                    <div className="form__element">
                        <RadioGroup
                            name="gender"
                            form={form}
                            disabled={true}
                            mode = "gender"
                            optionData={[
                                { label: 'Nam', value: Number(1) },
                                { label: 'Nữ', value: Number(0) }
                            ]}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="email"
                            type="email"
                            form={form}
                            placeholder="Email"
                            disabled={true}
                            icon={<MdEmail />}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="birthday"
                            type="date"
                            form={form}
                            placeholder="Ngày sinh"
                            disabled={true}
                            icon=<BsFillCalendarFill />
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="phoneNumber"
                            type="input"
                            form={form}
                            placeholder="Số điện thoại"
                            disabled={true}
                            icon={<BsFillTelephoneFill />}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="address"
                            type="input"
                            form={form}
                            placeholder="Địa chỉ"
                            disabled={true}
                            icon={<MdLocationPin />}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="reason"
                            type="textarea"
                            form={form}
                            placeholder="Lí do khám"
                            icon={<AiFillPlusCircle />}
                        />
                    </div>
                    <div className="form__price">
                        <div className="form__price-price">
                            <span>Giá khám</span>
                            <span>300.000 đ</span>
                        </div>
                        <div className="form__price-book">
                            <span>Phí đặt lịch</span>
                            <span>Miễn phí</span>
                        </div>
                        <div className="form__price-total">
                            <span>Tổng cộng</span>
                            <span>300.000 đ</span>
                        </div>
                    </div>
                    <span className="description">Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian làm thủ tục khám</span>
                    <div className="form__btn">
                        <button className="btnSuccess btnBook">Xác nhận đặt lịch khám</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookAppointment
