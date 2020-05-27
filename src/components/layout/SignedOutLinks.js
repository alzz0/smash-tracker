import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
  return (
    <ul className='right'>
      {/* <li>
        <NavLink to='/create'>NewPost</NavLink>
      </li> */}
      <li>
        <NavLink to='/users'>Fighters</NavLink>
      </li>
      <li>
        <NavLink to='/scoreboard'>Scoreboard</NavLink>
      </li>
      {/* <li>
        <NavLink to='/signup'>Signup</NavLink>
      </li> */}

      <li>
        <NavLink to='/signin'>Login</NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
