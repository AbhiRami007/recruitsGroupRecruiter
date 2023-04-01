import React from 'react'

function UpcomingEventCard() {
    return (
        <div className='upcoming-event-card'>
            <div className='event-timing-div'>
                <span className='circle'></span>
                <span className='event-timings-tag'>11:00 - 12:00</span>
            </div>
            <span className='event-name-tag'>Interview with recruiter</span>
            <span className='event-desc-tag'>Your hard work will sincerely pay off</span>
        </div>
    )
}

export default UpcomingEventCard
