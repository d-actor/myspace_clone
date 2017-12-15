import axios from 'axios';

export const addFriend = (friend) => {
  return {type: 'ADD_FRIEND', id }
}

export const deleteFriend = (id) => {
  return {type: 'DELETE_FRIEND', id }
}

export const updateFriend = (id) => {
  return {type: 'UPDATE_FRIEND', id }
}

export const getFriends = (cb) => {
  return (dispatch) => {
    axios.get('/api/friends')
      .then( res => dispatch({ type: 'FRIENDS', friends: res.data}) )
      .then( cb() )
  }
}
