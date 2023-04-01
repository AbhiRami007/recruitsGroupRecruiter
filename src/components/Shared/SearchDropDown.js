import React, { useEffect, useRef } from 'react'
import searchIcon from '../../assets/images/icons/search.png'
import SingleSearchHistory from './SingleSearchHistory'

function SearchDropDown({ open }) {
    const inputElement = useRef();
    useEffect(() => {
        inputElement.current.focus();

    })


    return (
        <div style={open ? { display: 'flex' } : { display: "none" }} className="notification-dropdown-div">
            <div className="notification-dropdown-head-cont">

                <div className="dropdown-notification-head-div">
                    <div className='search-dropdown-div1'>
                        <img style={{ width: '25px', height: "25px" }} className='search-icon' src={searchIcon} alt="search-icon" />

                        <input ref={inputElement} className='search-input-box' placeholder='Search...' type="text" />
                    </div>
                    <div className='search-dropdown-div2'>
                        <span style={{ textDecoration: 'underline' }} className='clear-all-btn dropdown-mark-all-tag'>clear all</span>
                    </div>
                </div>
            </div>

            <div className="dropdown-notification-div">
                <SingleSearchHistory />
                <SingleSearchHistory />
                <SingleSearchHistory />
                <SingleSearchHistory />
                <SingleSearchHistory />
                <SingleSearchHistory />
                <SingleSearchHistory />


            </div>
        </div>
    )
}

export default SearchDropDown
