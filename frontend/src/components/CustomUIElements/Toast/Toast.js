import React from 'react';
import PropTypes from 'prop-types';
import './Toast.css';
import {toast, ToastContainer} from "react-toastify";
// Adds toast default css from the library
import 'react-toastify/dist/ReactToastify.css';

const {forwardRef, useRef, useImperativeHandle} = React;

/* Toast Props
* - test(boolean) = if true reveal a button that allows use to send a notification on all pages with the Toast Component.
* - type(string) = pass the type of toast you need. Available types are: dark -> dark mode, info, success, error and warning.
* - message = pass the message you need to display
*  */
const Toast = forwardRef((props, ref) => {
  //Attributes
  const type = props.type
  const message = props.message
  const test = props.test

  useImperativeHandle(ref, () => ({
    toast() {
      notify(type, message)
    }
  }));

  // Method for triggering the toast
  function notify(type, message) {
    if (type === "dark")
      toast.dark(message);
    else if (type === "info")
      toast.info(message);
    else if (type === "success")
      toast.success(message);
    else if (type === "error")
      toast.error(message);
    else if (type === "warning")
      toast.warning(message);
    else {
      toast(message);
    }
  }

  return (
    <div className="toast">
      {props.test &&
        <div className={"btn-wrapper"}>
          <button onClick={() => notify(type, message)}>Run Notification</button>
        </div>
      }
      <ToastContainer
        className={type}
        toastClassName={"toast-design"}
        progressClassName={"progress-bar-design"}/>
    </div>
  );
});

// Enforce a certain prop for types
Toast.propTypes = {
  test: PropTypes.bool,
  type: PropTypes.string,
  message: PropTypes.string
};

export default Toast;
