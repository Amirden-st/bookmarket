const defaultState = {
  books: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };

    default:
      return state;
  }
}


export default reducer;
