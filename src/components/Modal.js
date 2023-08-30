function Modal(props) {
  function onconfirmHandler() {
    props.confirmHandler();
  }
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={props.onCancel}>
        Cancel
      </button>
      <button className='btn' onClick={onconfirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
