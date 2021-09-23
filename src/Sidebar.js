import React from 'react';
import DonutLarge from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import { SearchOutlined } from '@material-ui/icons';
import MoreVerticon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton } from '@material-ui/core';
import "./Sidebar.css";

function Sidebar() {
    return <div className="sidebar">
    <div className="sidebar_header">
                <Avatar />
        <div className="sidebar_right">
        
            <IconButton>
                <DonutLarge />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVerticon />
            </IconButton>
            
        </div>
        
    </div>
    <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchOutlined />
                <input placeholder="Search? Or Start Chat" type="text" />
            </div>
            
        </div>
    </div>
}

export default Sidebar;