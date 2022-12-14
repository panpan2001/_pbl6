import doctorApi from 'api/doctorApi'
import { path } from 'constants/path'
import React, { useEffect, useMemo, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.scss'
import queryString from 'query-string'
import SearchInput from 'components/SearchInput'
import { useDebounce } from 'hooks/useDebounce'
import Loading from 'components/Loading'
import Pagination from 'components/Pagination'

function DoctorManagement() {
    const [isLoading, setIsLoading] = useState(true)

    const [dataListDoctors, setDataListDoctors] = useState([])
    const [pagination, setPagination] = useState({
        totalPages: 3,
        totalElements: 11,
        page: 0
    })
    const handlePageChange = page => {
        const filters = { ...queryParams, page: page }
        navigate(`?${queryString.stringify(filters)}`)
    }
    const location = useLocation()
    const [searchValue, setSearchValue] = useState(
        () => queryString.parse(location.search).key
    )
    const debounceValue = useDebounce(searchValue, 500)
    const navigate = useNavigate()
    const handleOnChangeSearchInput = e => {
        setSearchValue(e.target.value)
    }
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search)
        return {
            page: Number.parseInt(params.page) || 0,
            limit: Number.parseInt(params.limit) || 10,
            key: params.key || ''
        }
    }, [location.search])

    useEffect(() => {
        const params = { ...queryParams, key: debounceValue, page: 0 }
        navigate(`?${queryString.stringify(params)}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue])

    useEffect(() => {
        (async () => {
            try {
                const data = await doctorApi.getAllDoctor(queryParams)
                setDataListDoctors(data.doctor)
                setPagination(data.page)
                setIsLoading(false)
            } catch (err) {
                alert(err)
            }
        })()
    }, [queryParams])
    if (isLoading) return <Loading />
    return (
        <div className="doctorManagement">
            <div className="doctorManagement__container">
                <header>Qu???n l?? B??c s??</header>
                <div className="doctorManagement__action">
                    <button
                        className="btnSuccess"
                        onClick={() => navigate(path.addDoctor)}
                    >
                        Th??m b??c s?? m???i
                    </button>
                    <div className="clinicManagement__action-search">
                        <SearchInput placeholder="T??m ki???m b??c s??" mode = "list" handleSearch = {handleOnChangeSearchInput} value = {searchValue}/>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>H??? t??n</th>
                            <th>Ng??y sinh</th>
                            <th>S??? ??i???n tho???i</th>
                            <th>Gi???i t??nh</th>
                            <th>Email</th>
                            <th>Chuy??n khoa</th>
                            <th>Ph??ng kh??m </th>
                            <th>B???nh vi???n </th>
                            <th>Ch???nh s???a </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataListDoctors && dataListDoctors.map(doctor => (
                            <tr key={doctor.id}>
                                <td>{doctor.id}</td>
                                <td>{`${doctor.user.firsname} ${doctor.user.lastname}`}</td>
                                <td>{doctor.user.birthday.split('T')[0]}</td>
                                <td>{doctor.user.phoneNumber}</td>
                                <td>{doctor.user.gender === 1 ? 'Nam' : 'N???'}</td>
                                <td>{doctor.user.email}</td>
                                <td>{doctor.specialty.name}</td>
                                <td>{doctor.clinic.name}</td>
                                <td>{doctor.hospital.name}</td>
                                <td>
                                    <Link
                                        to={`/system/updateDoctor/${doctor.id}`}
                                        state={{ doctor }}
                                    >
                                        <span className="edit__icon">
                                            <AiFillEdit />
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="doctorManagement__pagination">
                    <Pagination totalPage={pagination.totalPages} currentPage={pagination.page} onClick = {handlePageChange}/>
                </div>
            </div>
        </div>
    )
}

export default DoctorManagement