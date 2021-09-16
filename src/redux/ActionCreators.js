import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseURL';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text,
    }
});

//action creator: nested arrow function with redux-thunk
//action creator with redux-thunk --> returns another action
//function that stimulates a delay in fetching data 
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());


    return fetch(baseUrl + 'campsites')
        .then (response => response.json())
        .then (campsites => dispatch(addCampsites(campsites)));
};

//action creator that dispatches when fetchCampsites dispatches 
//normal action creator --> returns an object//
export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

//action creator for campsitesFailed, passes errMess (error message) 
//normal action creator --> returns an object//
export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

//action creator for addscampsite
//normal action creator --> returns an object//
export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

export const fetchComments = () => dispatch => {    
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});