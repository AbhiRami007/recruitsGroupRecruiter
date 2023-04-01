import React from 'react'
// import NotificationCard from './Notification/NotificationCard'
import SingleDropdwonNotifCard from './SingleDropdwonNotifCard'


function NotificationDropDown({ open }) {
    const notifi = ["Profile completion pending", "Google job application approved", "Todo tasks are added"]
    return (
        <div style={open ? { display: 'flex' } : { display: "none" }} className="notification-dropdown-div">
            <div className="notification-dropdown-head-cont">
                {/* <img className='profile-img-tag' src={profileImg} alt="profile-img" /> */}
                <div className="dropdown-notification-head-div">
                    <span className="dropdown-name-tag">Notifications</span>
                    <span style={{ textDecoration: 'underline' }} className="dropdown-mark-all-tag">Mark all as read</span>
                </div>
            </div>

            <div className="dropdown-notification-div">
                {notifi.length > 0 ?
                    notifi.map((e, k) => {
                        return <SingleDropdwonNotifCard key={k} message={e} />;

                    })
                    :
                    <p style={{ alignSelf: "center" }}>No notification</p>
                }


            </div>
        </div>
    )
}

export default NotificationDropDown
