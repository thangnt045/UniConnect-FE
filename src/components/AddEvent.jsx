import React, { useState } from "react";
import "../styles/AddEventForm.css";
import { addEvent } from "../fetchAPI/api";
import { useNavigate } from "react-router-dom";

const AddEventForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        datetime: "",
        location: "",
        tickets: "",
        ticketsLeft: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        // Check for empty or null values in formData
        const hasEmptyField = Object.values(formData).some(
            (value) => value === null || value === ""
        );

        if (hasEmptyField) {
            alert("Vui lòng không để trống các thông tin.");
        } else {
            addEvent(formData)
            alert("Sự kiện đã được tạo thành công.")
            navigate("/events")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "tickets") {
            setFormData({...formData, "tickets": value, "ticketsLeft": value})
        } else {
            setFormData({ ...formData,[name]: value });
        }
        
    };

    return (
        <div className="event-form">
        {/* Image Upload Section */}
        <div className="image-upload">
            <div className="image-placeholder"></div>
            <button className="upload-button">
            <span>📷</span>
            </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
            <div className="form-row">
            <div className="form-group">
                <label>Tên sự kiện</label>
                <input
                type="text"
                name="title"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="Tên sự kiện"
                />
            </div>
            <div className="form-group">
                <label>Ngày bắt đầu</label>
                <input
                type="date"
                name="datetime"
                value={formData.startDate}
                onChange={handleChange}
                />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group">
                <label>Địa điểm</label>
                <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Địa điểm"
                />
            </div>
            <div className="form-group">
                <label>Số vé</label>
                <input
                type="number"
                name="tickets"
                value={formData.tickets}
                onChange={handleChange}
                placeholder="Số vé"
                />
            </div>
            </div>
            <div className="form-group">
            <label>Mô tả sự kiện</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Mô tả sự kiện"
            ></textarea>
            </div>
            <div className="form-buttons">
            <button onClick={() => {navigate(`/events`);}} type="button" className="cancel-button">
                Hủy
            </button>
            <button type="submit" className="save-button">
                Tạo
            </button>
            </div>
        </form>
        </div>
    );
};

export default AddEventForm;