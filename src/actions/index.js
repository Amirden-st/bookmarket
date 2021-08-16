const booksLoaded = (payload) => {
  return {
    type: 'BOOKS_LOADED',
    payload: payload
  }
}


export default booksLoaded;
