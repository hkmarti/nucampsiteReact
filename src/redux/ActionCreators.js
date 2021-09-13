import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

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
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);  
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