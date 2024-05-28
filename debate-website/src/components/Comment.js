import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.text}</p>
      <small>{comment.author}</small>
    </div>
  );
};

export default Comment;
