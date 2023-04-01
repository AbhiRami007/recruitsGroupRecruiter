import React from 'react'
import stackIcon from '../../../assets/images/icons/stack.png'

function NotificationCard({ message }) {
    return (
        <div className='notification-card-main-cont'>
            <img src={stackIcon} alt="stack-icon" />
            <div style={{ maxWidth: "400px" }}>
                <span style={{ fontSize: "14px" }}>{message}.</span>
            </div>
        </div>
    )
}

export default NotificationCard
