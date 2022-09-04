import { React, useRef } from 'react';
import {createPortal} from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
  const containerRef = useRef();

  return (
    createPortal(
      <div className="backdrop" onClick={props.onClick}></div>,
      containerRef.current
    )
  )
};

export default Backdrop;
