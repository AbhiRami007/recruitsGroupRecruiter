import React, { useState } from 'react'
import profileImg from '../../assets/images/icons/profile.png'
import InputEmoji from "react-input-emoji";

import Message from './Message'

function Comments({ isOpen }) {
    const [text, setText] = React.useState("");
    function handleOnEnter(text) {
        console.log("enter", text);
    }
    const [file, setFile] = useState();

    function handleChange(event) {
        setFile(event.target.files[0])
    }
    return (
        <div style={isOpen ? { margin: "5px 20px", display: "flex", alignItems: "flex-start", flexDirection: "column", height: '250px', borderTop: "1px solid lightgray", backgroundColor: "white", } : { display: "none" }}>
            <span style={{ fontSize: '15px', fontWeight: 500 }}>Comments</span>
            <div className='message-show-div' style={{ flex: 2, width: "100%", overflow: "auto", maxHeight: "100%" }}>
                <Message person="me" />
                <Message person="other" />
                <Message person="me" />
                <Message person="me" />
            </div>
            <div style={{ flex: .7, width: "100%", gap: "15px", alignItems: "center", backgroundColor: "white", display: "flex" }}>
                <img className='profile-img-tag' style={{ width: "40px" }} src={profileImg} alt="profile-img" />
                <div style={{ backgroundColor: "white", display: "flex", alignItems: "center", padding: "0 15px", gap: "10px", width: "88%", height: '80%', borderRadius: "15px", border: "1px solid lightgray" }}>
                    <input type="text" placeholder='Add a comment...' style={{ height: '80%', width: "100%", fontSize: "14px", border: 'none', outline: 'none' }} />
                    {/* <InputEmoji
                        value={text}
                        style={{ height: '80%', width: "100%", fontSize: "14px", border: 'none', outline: 'none' }}
                        onChange={setText}
                        cleanOnEnter
                        onEnter={handleOnEnter}
                        placeholder="Type a message"
                    /> */}
                    {file && <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{file.name}</p>}
                    <label htmlFor="file-uploader">
                        <i class="fa fa-paperclip" style={{ fontSize: "25px", cursor: "pointer" }} aria-hidden="true"></i>

                    </label>
                    <input id="file-uploader" onChange={handleChange} type={"file"} style={{ display: "none" }} />

                    <i class="fa fa-paper-plane" style={{ fontSize: "25px", cursor: "pointer", transform: "rotate(50deg)" }} aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default Comments
