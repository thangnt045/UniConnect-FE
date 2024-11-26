// src/redux/reducers.js
import {
  SET_SEARCH_QUERY,
  SET_SELECTED_EVENT,
  SET_ALL_EVENTS,
} from "./actions";

const initialState = {
  searchQuery: "",
  filteredEvents: [],
  selectedEvent: null,
  allEvents: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_EVENTS:
      return {
        ...state,
        allEvents: action.payload,
        filteredEvents: action.payload, // Initialize filteredEvents
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload, // Track query for dropdown
      };

    case SET_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
