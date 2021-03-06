import React, { useState } from 'react';
function PopUpModal({ ...props }) {
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
    <div className='modal-popup' style={popupActive ? display : hide}>
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
        <p>{...props.content || 'no content yet'} </p>
      </div>
    </div>
  );
  return (
    <div className='popup-modal-likes' onClick={e => toggle(e)}>
      {modal}
    </div>
  );
}
export default PopUpModal;
