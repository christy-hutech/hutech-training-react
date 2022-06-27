import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

const createUsingAxios = (url, payload = null) => {
    return axios.post(url, payload);
};

const fetchUsingAxios = (url, payload = null) => {
    return axios.get(url,payload);
};

const fetchCommentsAxios = (url, payload = null) => {
  return axios.get(url);
};

const addCommentsAxios = (url, payload = null) => {
  return axios.post(url,payload);
};

const fetchPostDetailsAxios = (url, payload = null) => {
  return axios.get(url);
};

const fetchPhotosDetailsAxios = (url, payload = null) => {
  return axios.get(url);
};

function* fetchPost(action) {
    try {
        const posts = yield call(
        fetchUsingAxios,
        "https://jsonplaceholder.typicode.com/posts?param"
      );
      yield put({ type: "FETCH_POST_SUCCESS", result: posts });
    } catch (e) {
      yield put({ type: "FETCH_POST_FAILED", error: e.message });
    }
}

function* addPost(action) {
    try {
      const posts = yield call(
        createUsingAxios,
        "https://jsonplaceholder.typicode.com/posts",
        action.payload
      );
      yield put({ type: "ADD_POST_SUCCESS", result: posts });
    } catch (e) {
      yield put({ type: "ADD_POST_FAILED", error: e.message });
    }
}

function* fetchComments(action) {
  try {
      const comments = yield call(
        fetchCommentsAxios,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`
    );
    yield put({ type: "FETCH_COMMENT_SUCCESS", result: comments });
  } catch (e) {
    yield put({ type: "FETCH_COMMENT_FAILED", error: e.message });
  }
}

function* addComments(action) {
  try {
      const comments = yield call(
        addCommentsAxios,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`,action.payload
    );
    yield put({ type: "ADD_COMMENT_SUCCESS", result: comments });
  } catch (e) {
    yield put({ type: "ADD_COMMENT_FAILED", error: e.message });
  }
}

function* fetchPostDetails(action) {
  try {
      const postDetails = yield call(
        fetchPostDetailsAxios,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}`
    );
    
    yield put({ type: "FETCH_POSTDETAILS_SUCCESS", result: postDetails });
  } catch (e) {
    yield put({ type: "FETCH_POSTDETAILS__FAILED", error: e.message });
  }
}

function* fetchPhotosDetails() {
  try {
      const photosDetails = yield call(
        fetchPhotosDetailsAxios,
      "https://jsonplaceholder.typicode.com/photos"
    );
    
    yield put({ type: "FETCH_PHOTOS_SUCCESS", result: photosDetails });
  } catch (e) {
    yield put({ type: "FETCH_PHOTOS_FAILED", error: e.message });
  }
}

function* allSagas() {

  yield all([
    takeLatest("FETCH_POST", fetchPost),
    takeLatest("ADD_POST", addPost),
    takeLatest("FETCH_COMMENT", fetchComments),
    takeLatest("FETCH_POSTDETAILS", fetchPostDetails),
    takeLatest("FETCH_PHOTOS", fetchPhotosDetails),
    takeLatest("ADD_COMMENT", addComments),
  ]);
}
  
export default allSagas;