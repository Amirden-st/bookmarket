import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import booksLoaded from '../../actions';

import BookListItem from '../book-list-item';


const BookList = ({bookstoreService, books, booksLoaded}) => {
  useEffect(() => {
    booksLoaded(bookstoreService.getBooks())
  }, [])

  return (
    <div>
      {
          books.map((item) => <BookListItem key={item.id} book={item} />)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = {
  booksLoaded: booksLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(withBookstoreService(BookList));
