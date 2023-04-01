import React from 'react'

import { Link } from 'react-router-dom'
import notify from '../../assets/images/icons/notify.png'
function ResetPassword() {
    return (
        <div className='forgot-passord-mai-cont' style={{ height: "100vh", overflow: "hidden", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ height: "100%", width: "100%", backgroundColor: "#F7F6F7", position: "absolute" }}>
                <div style={{ width: "100%", height: "35%", backgroundColor: "#1F194C" }}></div>
            </div>
            <div className='forgot-password-container'>
                <div className='forgot-password-notify-img-cont'>
                    <img width="15%" src={notify} alt="notify" />
                </div>
                <div className='forgot-password-text-cont'>
                    <span className='forgot-password-head-text-tag'>Reset Password</span>
                    <p className='forgot-password-text-tag'>Enter a new password</p>
                </div>
                <label>New Password : </label>
                <div className='forgot-password-email-input'>

                    <input style={{ width: "100%", fontSize: "16px", height: '100%', outline: 'none', border: "none" }} type="email" />
                </div>
                <label>Confirm New Password : </label>

                <div className='forgot-password-email-input'>

                    <input style={{ width: "100%", fontSize: "16px", height: '100%', outline: 'none', border: "none" }} type="email" />
                </div>
                <div className='forgot-password-submit-btn-cont'>
                    <div className='forgot-password-submit-btn'>
                        <Link style={{ color: "black", textDecoration: "none" }} to="/auth/password-reset/2">Submit</Link>

                    </div>
                </div>
                <div className='back-to-login-btn'>
                    <i style={{ cursor: "pointer", fontSize: "16px" }} class="fa fa-chevron-left" aria-hidden="true"></i>
                    <Link to="/auth/login" className='back-to-login-tag'>Back to Login</Link>
                </div>
            </div>

        </div>
    )
}

export default ResetPassword
