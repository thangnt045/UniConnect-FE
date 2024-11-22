import React from "react";

const EventsDataList = ({ events, onEdit }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên Sự Kiện</th>
            <th>Địa Điểm</th>
            <th>Thời Gian</th>
            <th>Danh Mục</th>
            <th>Số Vé</th>
            <th>Mô Tả</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>
                <img src={event.image} alt={event.title} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              </td>
              <td>{event.title}</td>
              <td>{event.location}</td>
              <td>{event.datetime}</td>
              <td>{event.category}</td>
              <td>{event.tickets}</td> 
              <td>{event.description.slice(0, 50)}...</td> 
              <td>
                <button onClick={() => onEdit(event)}>Chỉnh Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsDataList;
