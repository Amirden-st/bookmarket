import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';


const BookList = ({books}) => {
  return (
    <div>
      {
          books.map((item) => <BookListItem key={item.id} book={item} />)
      }
    </div>
  )
}


const BookListContainer = ({fetchBooks, books, loading, error}) => {
  useEffect(() => {
    fetchBooks()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <BookList books={books} />
}


const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService)
  }
}

export default withBookstoreService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
