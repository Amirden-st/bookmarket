import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import Spinner from '../spinner';
import './book-list.css';

const BookList = ({bookstoreService, books, booksLoaded}) => {
  useEffect(() => {
    bookstoreService.getBooks().then((data) => {
        booksLoaded(data)
    })

  }, [])

  return (
    <div>
      {
          books.map((item) => <BookListItem key={item.id} book={item} />)
      }
    </div>
  )
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(withBookstoreService(BookList));
