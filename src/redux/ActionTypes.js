//When request has been successfully retrieved from the server and can be safely added to the state//
export const ADD_CAMPSITES = 'ADD_CAMPSITES';
//When app is loading campsite data but has not received data yet. 
//Made request to server and is waiting for response.  
export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';
//When server request has failed and data cannot be loaded. 
//Lets redux store know so it can display error message.
export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';


export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';


export const ADD_PROMOTIONS = 'ADD_PROMOTIONS';
export const PROMOTIONS_LOADING = 'PROMOTIONS_LOADING';
export const PROMOTIONS_FAILED = 'PROMOTIONS_FAILED';

export const ADD_PARTNERS = 'ADD_PARTNERS';
export const PARTNERS_LOADING = 'PARTNERS_LOADING';
export const PARTNERS_FAILED = 'PARTNERS_FAILED';