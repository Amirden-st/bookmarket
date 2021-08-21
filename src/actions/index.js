const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}


const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};


const booksError = (error_description) => {
  return {
    type: 'FETCH_BOOKS_FALURE',
    payload: error_description
  }
}


const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks().then((data) => {
    dispatch(booksLoaded(data))
  }).catch((err) => {
    dispatch(booksError(err))
  })
}


export {
  booksLoaded,
  booksRequested,
  booksError,
  fetchBooks
};
