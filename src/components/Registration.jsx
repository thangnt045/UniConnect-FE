import React from 'react';
import '../styles/Registration.css';


const Registration = ({ location, datetime, ticketLeft }) => {
    return (
        <div className="registration-container">
            <p>Địa điểm: {location}</p>
            <p>Thời gian: {datetime}</p>
            <p>Vé còn lại: {ticketLeft}</p>
            <button className="register-button">Đăng ký</button>
        </div>
    );
};

export default Registration;
