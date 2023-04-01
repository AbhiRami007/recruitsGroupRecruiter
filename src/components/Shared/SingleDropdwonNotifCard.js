import React from 'react'
import stackIcon from '../../assets/images/icons/stack.png'


function SingleDropdwonNotifCard({ message }) {
    return (
        <div className='single-notfication-card'>
            <img src={stackIcon} className="notif-drop-down-stack-icon" alt="notif-drop-down-stack-icon" />

            <span className="notification-dropdown-div-nav-tag">{message}.</span>
        </div>
    )
}

export default SingleDropdwonNotifCard
