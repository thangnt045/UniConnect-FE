const API_URL = "http://localhost:5000/events";

// Fetch all events
export const fetchEvents = async () => {
  const response = await fetch(API_URL)
  return response.json()
};

// Update an event
export const updateEvent = async (id, updatedEvent) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedEvent),
  });
  return response.json();
};

// Add an event
export const addEvent = async (data= {}) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data)
  })
  return response.json()
}
