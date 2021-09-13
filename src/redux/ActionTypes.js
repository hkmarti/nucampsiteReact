export const ADD_COMMENT = 'ADD_COMMENT';

//When app is loading campsite data but has not received data yet. 
//Made request to server and is waiting for response.  
export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';

//When server request has failed and data cannot be loaded. 
//Lets redux store know so it can display error message.
export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';

//When request has been successfully retrieved from the server and can be safely added to the state//
export const ADD_CAMPSITES = 'ADD_CAMPSITES';