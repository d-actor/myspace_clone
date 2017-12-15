const friends = ( state = [], action ) => {
  switch (action.type) {
    case 'FRIENDS':
      return action.friends
    case 'ADD_FRIEND':
      return [action.friend, ...state]
    case 'UPDATE_BLOG':
      return state.map( friend => {
        if (friend.id === action.friend.id)
          return action.friend
        return friend
      })
    case 'DELETE_FRIEND':
      return state.filter( f => f.id !== action.id )
    default:
      return state;
  }
}

export default friends;
