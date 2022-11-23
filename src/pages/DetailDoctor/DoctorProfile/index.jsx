import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './index.scss'
DoctorProfile.propTypes = {}

function DoctorProfile({ doctor }) {
    return (
        <div className="doctorProfile">
            <div className="doctorProfile__container">
                <div className="doctorProfile__info">
                    <div className="doctorProfile__info-img">
                        <img src={doctor.user.image} alt="doctor" />
                    </div>
                    <div className="doctorProfile__info-content">
                        <span>
                            Bác sĩ {doctor.user.firsname} {doctor.user.lastname}
                        </span>
                        <p>
                            {doctor.description}
                        </p>
                    </div>
                </div>
                <div className="doctorProfile__rate">
                    <span className="doctorProfile__rate-point">3.0 trên 5</span>
                    <div>
                        <span className="doctorProfile__rate-star-active">
                            <AiFillStar />
                        </span>
                        <span className="doctorProfile__rate-star-active">
                            <AiFillStar />
                        </span>
                        <span className="doctorProfile__rate-star-active">
                            <AiFillStar />
                        </span>
                        <span>
                            <AiFillStar />
                        </span>
                        <span>
                            <AiFillStar />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
