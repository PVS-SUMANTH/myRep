import React from 'react';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVerticon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {Avatar, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import "./Chatcomponent.css";

function Chatcomponent() {
    return <div className="chat">
        <div className="chatHeader">
        <Avatar />
                <div className="chatinfo">
                    <h2>Room name</h2>
                    <h3>Last seen time</h3>
                </div>
                        <div className="chatRight">
                            <IconButton>
                                <SearchOutlined />
                            </IconButton>
                            <IconButton>
                                <AttachFile />
                            </IconButton>
                            <IconButton>
                                <MoreVerticon />
                            </IconButton>
                        </div>
                
        </div>
        <div className="chatBody">
            <p className="chatMessage">
                <span className="chat_name">
                    Sonny
                </span>
                    This is a Message
                <span className="chat_timeStamp">
                     {new Date().toUTCString()}
                </span>
            </p>

            <p className="chatReciever">
                <span className="chat_name">
                    Sonny
                </span>
                    This is a Message
                <span className="chat_timeStamp">
                     {new Date().toUTCString()}
                </span>
            </p>
        </div>

        <div className="chat_type">
            <InsertEmoticonIcon />
            <form>
                <input placeholder="Type a message"
                type = "text" />
                <button type="submit">Send a message</button>
            </form>
            <MicIcon />
        </div>

    </div>
}

export default Chatcomponent;