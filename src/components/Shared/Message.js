import React from 'react'
import profileImg from '../../assets/images/icons/profile.png'

function Message({ person }) {
    return (
        <div style={person === "me" ? { width: '100%', gap: '10px', marginTop: "5px", justifyContent: "flex-start", display: "flex", alignItems: "center", minHeight: '50px' } : { width: '100%', gap: '10px', marginTop: "5px", alignItems: "center", justifyContent: "flex-end", display: "flex", minHeight: '50px' }}>
            {person === "me" ?
                <><img className='profile-img-tag' style={{ width: "40px" }} src={profileImg} alt="profile-img" />
                    <div style={{ padding: "1% 2%", height: "40px", borderTopLeftRadius: "10px", maxWidth: "90%", borderBottomRightRadius: "10px", backgroundColor: "#DFE3F1" }}>
                        <span style={{ fontSize: "14px", }}>iam interested</span>
                    </div></>
                : <>
                    <div style={{ padding: "1% 2%", height: "40px", borderTopLeftRadius: "10px", borderBottomRightRadius: "10px", backgroundColor: "#DFE3F1" }}>
                        <span style={{ fontSize: "14px", }}>jnjnj</span>
                    </div><img className='profile-img-tag' style={{ width: "40px" }} src={profileImg} alt="profile-img" /></>
            }


        </div>
    )
}

export default Message
