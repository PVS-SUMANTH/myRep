import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return <div className="SidebarChat">
        <Avatar />
        <div className="SidebarChat_info">
            <h2>Room Name</h2>
            <p1>Last message</p1>
        </div>

    </div>
}

export default SidebarChat;