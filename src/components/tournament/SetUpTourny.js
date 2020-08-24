import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  startTournament,
  startTourny,
} from '../../store/actions/tournamentActions';
import './tournament.css';
function SetUpTourny({ users, startTournament, startTourny }) {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersIds, setSelectedUsersIds] = useState([]);
  const [tournyNameState, setTournyNameState] = useState();
  function addOrRemove(user) {
    let particapents = {
      name: `${user.firstName} ${user.lastName}`,
      id: user.id,
      win: false,
    };
    let copiedArr = [...selectedUsers];
    let copiedArrIds = [...selectedUsersIds];

    var removeIndex = copiedArr
      .map(function (item) {
        return item.id;
      })
      .indexOf(user.id);

    if (removeIndex === -1) {
      setSelectedUsers([...selectedUsers, particapents]);
    } else {
      copiedArr.splice(removeIndex, 1);

      setSelectedUsers(copiedArr);
    }

    var removeIndexIds = copiedArrIds
      .map(function (item) {
        return item;
      })
      .indexOf(user);

    if (removeIndex === -1) {
      setSelectedUsersIds([...selectedUsersIds, user.id]);
    } else {
      copiedArrIds.splice(removeIndexIds, 1);
      setSelectedUsersIds(copiedArrIds);
    }
  }
  function tournyName(e) {
    setTournyNameState(e.target.value);
  }
  function handleNormalSubmit(e) {
    e.preventDefault();
    if (tournyNameState) {
      startTournament(selectedUsers, tournyNameState);
      startTourny();
    }
  }
  function handleRandomizeSubmit(e) {
    e.preventDefault();
    if (tournyNameState) {
      let randomizeUsers = selectedUsers;
      for (let i = randomizeUsers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomizeUsers[i], randomizeUsers[j]] = [
          randomizeUsers[j],
          randomizeUsers[i],
        ];
      }
      startTournament(randomizeUsers, tournyNameState);
      startTourny();
    }
  }
  let allUsers =
    users &&
    users.map((user) => {
      return (
        <li
          className={`tourny-users collection-item ${
            selectedUsersIds.includes(user.id) ? 'selected-tourny-user' : ''
          }`}
          onClick={() => addOrRemove(user)}
          key={user.id}
        >
          {user.firstName} {user.lastName}
        </li>
      );
    });

  return (
    <div>
      <h4>Tournament Name</h4>
      <input required type='text' placeholder='name' onChange={tournyName} />
      <h4>Select Particapents</h4>
      <ul className='collection'>{allUsers}</ul>
      {selectedUsers.length % 2 === 0 && selectedUsers.length > 0 && (
        <Fragment>
          <button
            className='waves-effect waves-light btn'
            onClick={(e) => handleNormalSubmit(e)}
          >
            {' '}
            BEGIN BATTLE
          </button>
          <button
            className='waves-effect waves-light btn'
            onClick={(e) => handleRandomizeSubmit(e)}
          >
            {' '}
            BEGIN BATTLE RANDOMIZE
          </button>
        </Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.firestore.ordered.users,
});
const mapDispatchToprops = (dispatch) => ({
  startTournament: (users, name) => dispatch(startTournament(users, name)),
  startTourny: () => dispatch(startTourny()),
});
export default compose(
  connect(mapStateToProps, mapDispatchToprops),
  firestoreConnect([{ collection: 'users' }])
)(SetUpTourny);
