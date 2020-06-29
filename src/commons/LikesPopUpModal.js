import React, { useState } from 'react';
function LikesPopUpModal({ names, ...props }) {
  const [popupActive, setPopupActive] = useState(false);
  var modal = [];
  const display = {
    display: 'block',
  };
  const hide = {
    display: 'none',
  };
  function toggle(e) {
    e.preventDefault();
    e.stopPropagation();
    setPopupActive(!popupActive);
  }
  modal.push(
    <div
      key={names}
      className='likes-modal'
      style={popupActive ? display : hide}
    >
      <div className='modal-footer'>
        <span
          className='btn-flat'
          style={{ color: '#fff', paddingLeft: 0, fontWeight: 'bold' }}
          onClick={toggle}
        >
          close
        </span>
      </div>
      <div className='modal-content'>
        {names.map((name, index) => {
          return (
            <li key={index} style={{ listStyle: 'none' }}>
              {name}
            </li>
          );
        })}
      </div>
    </div>
  );
  return (
    <div
      className={`popup-modal-likes ${popupActive ? '' : 'likes-hover'}`}
      onClick={e => toggle(e)}
    >
      {!popupActive &&
        `${props.dislike ? ' Disliked' : 'Liked '} by ${names[0]} and ${
          names.length - 1
        }  ${names.length > 2 ? 'others' : 'other'}`}
      {modal}
    </div>
  );
}
export default LikesPopUpModal;
