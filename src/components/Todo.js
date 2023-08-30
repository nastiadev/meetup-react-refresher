import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [isOpenBool, setIsOpenBool] = useState(false);

  const deleteHandler = () => {
    setIsOpenBool(true);
  };

  const closeModalHandler = () => {
    setIsOpenBool(false);
  };

  return (
    <div className='card'>
      <h2>{props.data}</h2>
      <div className='action'>
        <button className='btn' onClick={deleteHandler}>
          Click
        </button>
      </div>
      {isOpenBool && (
        <Modal
          onCancel={closeModalHandler}
          confirmHandler={closeModalHandler}
        />
      )}
      {isOpenBool && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
