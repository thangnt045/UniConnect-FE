import React, { useState } from 'react';
import '../styles/Edit.css'; 

const EditEvent = ({ event, onSave, onCancel }) => {
  const [title, setTitle] = useState(event.title);
  const [location, setLocation] = useState(event.location);
  const [datetime, setDatetime] = useState(event.datetime);
  const [ticketsLeft, setTicketsLeft] = useState(event.ticketsLeft);
  const [description, setDescription] = useState(event.description);

  const handleSave = () => {
    onSave({
      ...event,
      title,
      location,
      datetime,
      ticketsLeft,
      description,
    });
    alert("Thay đổi thành công!")
  };

  return (
    <div className="edit-event-container">
      <div className="edit-event-form-group">
        <label htmlFor="title">Tên Sự Kiện</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div className="edit-event-form-group">
        <label htmlFor="location">Địa Điểm</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
      </div>
      <div className="edit-event-form-group">
        <label htmlFor="datetime">Ngày Bắt Đầu</label>
        <input
          type="text"
          id="datetime"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          placeholder="Date & Time"
        />
      </div>
      <div className="edit-event-form-group">
        <label htmlFor="ticketsLeft">Số Vé</label>
        <input
          type="number"
          id="ticketsLeft"
          value={ticketsLeft}
          onChange={(e) => setTicketsLeft(e.target.value)}
          placeholder="Tickets Left"
        />
      </div>
      <div className="edit-event-form-group">
        <label htmlFor="description">Mô Tả Sự Kiện</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>

      <div className="edit-event-form-actions">
        <button 
          className="edit-event-save-button" 
          onClick={handleSave}>
          Lưu
        </button>
        <button 
          className="edit-event-cancel-button" 
          onClick={onCancel}>
          Hủy
        </button>
      </div>
    </div>
  );
};

export default EditEvent;
