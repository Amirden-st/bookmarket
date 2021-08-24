import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart, cartUpdated } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';


const BookList = ({books, onAddedToCart}) => {
  return (
    <div>
      {
          books.map((item) => <BookListItem onAddedToCart={onAddedToCart} key={item.id} book={item} />)
      }
    </div>
  )
}


const BookListContainer = ({fetchBooks, onAddedToCart, books, loading, error}) => {
  useEffect(() => {
    fetchBooks()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <BookList onAddedToCart={onAddedToCart} books={books} />
}


const mapStateToProps = ({bookList: { books, loading, error }}) => {
  return { books, loading, error }
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => { 
      dispatch(bookAddedToCart(id))
      dispatch(cartUpdated())
    }
  }
}

export default withBookstoreService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
