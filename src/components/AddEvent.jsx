import React, { useState } from "react";
import "../styles/AddEventForm.css";
import { addEvent } from "../fetchAPI/api";
import { useNavigate } from "react-router-dom";

const AddEventForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        eventName: "",
        startDate: "",
        location: "",
        tickets: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addEvent(formData)
    }

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
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="Tên sự kiện"
                />
            </div>
            <div className="form-group">
                <label>Ngày bắt đầu</label>
                <input
                type="date"
                name="startDate"
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