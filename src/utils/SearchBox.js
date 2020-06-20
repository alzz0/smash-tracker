import React from 'react';

export const SearchBox = props => {
  return (
    <div className='container'>
      <div className='input-field'>
        <label htmlFor='user'>Search by first name</label>
        <input type='text' id='user' onChange={props.handleInput} />
      </div>
    </div>
  );
};
