import specialistApi from 'api/specialistApi'
import SpecialistItem from 'pages/HomePage/components/SpecialistList/components/SpecialistItem'
import React, { useEffect, useState } from 'react'
import { GrFormPreviousLink } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

function HeaderSpecialist() {
    const [data, setData] = useState([])
    useEffect(() => {

        (async () => {
            const respone = await specialistApi.getAllSpecialist()
            setData(respone.message)
        })()
    }, [])
    const navigate = useNavigate()
    return (
        <div className="headerLinkComponent">
            <div className="headerLinkComponent__container">
                <header className="headerLinkComponent__header">
                    <button
                        className="headerLinkComponent__header-btn"
                        onClick={() => navigate(-1)}
                    >
                        <span>
                            <GrFormPreviousLink />
                        </span>
                    </button>
                    <span>Chuyên khoa</span>
                </header>
                <div className="headerLinkComponent__search">
                </div>
                <ul className="headerLinkComponent__list">
                    {
                        data.map (specialist => <SpecialistItem data={specialist} key = {specialist.id} mode = "column"/>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default HeaderSpecialist
