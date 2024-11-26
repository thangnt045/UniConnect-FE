export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_SELECTED_EVENT = "SET_SELECTED_EVENT";
export const SET_ALL_EVENTS = "SET_ALL_EVENTS";

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setSelectedEvent = (event) => ({
  type: SET_SELECTED_EVENT,
  payload: event,
});

export const setAllEvents = (events) => ({
  type: SET_ALL_EVENTS,
  payload: events,
});
