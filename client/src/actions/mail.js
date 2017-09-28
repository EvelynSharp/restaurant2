import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const sendMail = ({firstName, lastName, email, message}) => {
  return(dispatch) => {
   axios.post(`/api/mails`, {first_name: firstName, last_name: lastName, email, message} )
    .then( ({ data, headers }) => {
      console.log(data)
     // dispatch({ type: UPDATE_PROJECT, project: data, headers });
    })
    .catch( err => {
      const message = err.response.data.errors;
      dispatch(setHeaders(err.headers));
      dispatch(setFlash(message, 'red'));
    })
  }
}
