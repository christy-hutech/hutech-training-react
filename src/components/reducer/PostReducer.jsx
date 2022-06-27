import { combineReducers } from "redux";
const initialState = {
  fetching: false,
  result: null,
  error: null,
};

const listPost = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST":
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "FETCH_POST_SUCCESS":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "FETCH_POST_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const postDetails = (state = initialState, action) => {
  switch (action.type) {
    case "POST_DETAILS":
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "FETCH_POSTDETAILS_SUCCESS":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "FETCH_POSTDETAILS__FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const addPost = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        fetching: true,
        result: null,
        error: null,
      };
    case "ADD_POST_SUCCESS":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };

    case "ADD_POST_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };

    default:
      return state;
  }
};

const listComment = (state = initialState, action) => {
  switch (action.type) {

    case "FETCH_COMMENT":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      }; 
      
    case "FETCH_COMMENT_SUCCESS":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };
  
    case "FETCH_COMMENT_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };

    default:
      return state;
  }
};

const addComment = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_COMMENT":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      }; 
      
    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };
  
    case "ADD_COMMENT_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };

    default:
      return state;
  }
};

const addGallery = (state = initialState, action) => {
  switch (action.type) {

    case "FETCH_PHOTOS":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      }; 
      
    case "FETCH_PHOTOS_SUCCESS":
      return {
        ...state,
        fetching: false,
        result: action.result.data,
        error: null,
      };
  
    case "FETCH_PHOTOS_FAILED":
      return {
        ...state,
        fetching: false,
        result: null,
        error: action.error,
      };

    default:
      return state;
  }
};

export default combineReducers({ listPost, addPost ,listComment,postDetails,addGallery,addComment});

