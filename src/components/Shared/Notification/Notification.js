import React from 'react'
import NotificationCard from './NotificationCard'

function Notification() {
    const notifi = ["Profile completion pending", "Google job application approved", "Todo tasks are added"]

    return (
        <div className='notification-main-cont'>
            <h3 className='new-jobs-head'>Notification</h3>
            <div className='new-notification-cards-cont'>
                {notifi.length > 0 ?
                    notifi.map((e, k) => {
                        return <NotificationCard key={k} message={e} />;

                    })
                    :
                    <p style={{ alignSelf: "center" }}>No notification</p>
                }
            </div>
        </div>
    )
}

export default Notification
