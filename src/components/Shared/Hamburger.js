import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../../core/Auth";

import searchIcon from '../../assets/images/icons/search.png'

function Hamburger({ open, close }) {
    const { logout } = useAuth();
    return (
        <div style={open ? { display: "flex" } : { display: "none" }} className='hamburger-main-cont'>
            {/* <div style={{ height: "100px" }} className='hamburger-dropdown-div1'>
                <img style={{ width: '25px', height: "25px" }} className='search-icon' src={searchIcon} alt="search-icon" />

                <input className='search-input-box' placeholder='Search...' type="text" />
            </div> */}
            <div className='hamburger-nav-options'>
                <Link to="/dashboard" onClick={() => close(false)} className='hamburger-single-nav-option'>Home</Link>
                <Link to="/jobs" onClick={() => close(false)} className='hamburger-single-nav-option'>Jobs</Link>
                <Link to="/applied-jobs" onClick={() => close(false)} className='hamburger-single-nav-option'>Applied Jobs</Link>
                <Link to="/saved-jobs" onClick={() => close(false)} className='hamburger-single-nav-option'>Saved Jobs</Link>
                <Link to="/profile" onClick={() => close(false)} className='hamburger-single-nav-option'>Profile</Link>
                <span className='hamburger-single-nav-option' onClick={() => close(false)}>My Documents</span>
                <span className='hamburger-single-nav-option' onClick={() => close(false)}>Language</span>
                <span className='hamburger-single-nav-option' onClick={() => close(false)}>Settings</span>
                <span className='hamburger-single-nav-option' onClick={logout}>Sign Out</span>
            </div>
        </div>
    )
}

export default Hamburger
