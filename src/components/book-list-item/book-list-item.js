import React from 'react';


const BookListItem = ({book}) => {
  const {name, author} = book;

  return (
    <div>
      <span>{name}</span>
      <span>{author}</span>
    </div>
  )
}

export default BookListItem;
