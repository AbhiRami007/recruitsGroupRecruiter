import React from 'react'
import grid from '../../assets/images/icons/grid.png'

function SingleSearchHistory() {
    return (
        <div className='single-notfication-card'>
            <img src={grid} alt="notif-drop-down-stack-icon" />

            <span className="notification-dropdown-div-nav-tag">UI/UX Designing</span>
            <span onClick={() => alert("removed")} style={{ textDecoration: "underline", fontSize: '12px', color: "#5C5B5B", cursor: "pointer" }}>clear</span>
        </div>
    )
}

export default SingleSearchHistory
