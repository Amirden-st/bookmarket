const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST",
    };
};

const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks,
    };
};

const booksError = (error_description) => {
    return {
        type: "FETCH_BOOKS_FALURE",
        payload: error_description,
    };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService
        .getBooks()
        .then((data) => {
            dispatch(booksLoaded(data));
        })
        .catch((err) => {
            dispatch(booksError(err));
        });
};

const bookAddedToCart = (payload) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: payload,
    };
};

const bookRemoveFromCart = (payload) => {
    return {
        type: "BOOK_REMOVE_FROM_CART",
        payload: payload,
    };
};

const allBookRemoveFromCart = (payload) => {
    return {
        type: "ALL_BOOK_REMOVE_FROM_CART",
        payload: payload,
    };
};

const cartUpdated = () => {
    return {
        type: "CART_UPDATED",
    };
};

export {
    booksLoaded,
    booksRequested,
    booksError,
    fetchBooks,
    bookAddedToCart,
    bookRemoveFromCart,
    allBookRemoveFromCart,
    cartUpdated,
};
