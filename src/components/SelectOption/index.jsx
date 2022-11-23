import React from 'react'
import './index.scss'
function SelectOption() {
    return (
        <div className="selectOption">
            <div className="selectOption__container">
                <select >
                    <option value="volvo">Thứ 2, 6/10/2022</option>
                    <option value="saab">Thứ 3, 7/10/2022</option>
                    <option value="vw">Thứ 4, 8/10/2022</option>
                    <option value="audi" selected>
                        Thứ 4, 9/10/2022
                    </option>
                </select>
            </div>
        </div>
    )
}

export default SelectOption
