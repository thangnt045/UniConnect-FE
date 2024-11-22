import React, { useState } from "react";
import "../styles/Edit.css"; // CSS riêng

const EditEvent = ({ event, editEvent, onCancel }) => {
  // State quản lý các trường nhập liệu
  const [title, setTitle] = useState(event.title);
  const [startDate, setStartDate] = useState(event.datetime);
  const [category, setCategory] = useState(event.category); 
  const [location, setLocation] = useState(event.location);
  const [tickets, setTickets] = useState(event.tickets); 
  const [description, setDescription] = useState(event.description);
  const [image, setImage] = useState(event.image); 

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value); 
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleTicketsChange = (e) => setTickets(e.target.value); 
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result); 
      reader.readAsDataURL(file);
    }
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      id: event.id,
      title,
      datetime: startDate,
      category, 
      location,
      tickets, 
      description,
      image, 
    };
    editEvent(updatedEvent);
  };

  return (
    <div className="edit-container">
      {/* Khu vực hình ảnh */}
      <div className="image-section">
        <div className="image-preview">
          {image ? (
            <img src={image} alt="Event" className="event-image" />
          ) : (
            <span className="icon">+</span>
          )}
          <label htmlFor="upload-image" className="upload-label">
            <span className="icon">+</span>
          </label>
          <input
            type="file"
            id="upload-image"
            className="upload-input"
            onChange={handleImageChange}
          />
        </div>
      </div>

      {/* Form chỉnh sửa sự kiện */}
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="event-name">Tên sự kiện</label>
            <input
              type="text"
              id="event-name"
              placeholder="Tên sự kiện"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-date">Ngày bắt đầu</label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Danh mục</label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange} 
            >
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Education">Education</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Địa điểm</label>
            <input
              type="text"
              id="location"
              placeholder="Địa điểm"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tickets">Số vé</label>
            <input
              type="number"
              id="tickets"
              min="0"
              placeholder="Số vé"
              value={tickets}
              onChange={handleTicketsChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="description">Mô tả sự kiện</label>
            <textarea
              id="description"
              rows="4"
              placeholder="Mô tả sự kiện"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onCancel}>
            Hủy
          </button>
          <button type="submit" className="save-button">
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEvent;
