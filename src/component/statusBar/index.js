import React from "react";
import { Link } from 'react-router-dom';
import './index.css';

const Status = () => {
    return (
        <div className="status-bar">
            <ul className='ul-container'>
                <li><Link to="/">EVENTS</Link></li>
                <li><Link to="/remainder">REMAINDERS</Link></li>
                <li><Link to="/task">TASKS</Link></li>  
            </ul>
        </div>
    );
}

export default Status;
