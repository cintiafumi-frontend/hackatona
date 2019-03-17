import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Button = (props) => {
  if (props.icon && props.icon === 'thumbsUp') {
    return (
      <div className='button'>
        <i className="fas fa-thumbs-up"></i>
        <Link to={props.path}>
          {props.label}
        </Link>
      </div>
    )
  } else if (props.icon && props.icon === 'thumbsDown') {
    return (
      <div className='button'>
        <i className="fas fa-thumbs-down"></i>
        <Link to={props.path}>
          {props.label}
        </Link>
      </div>
    )
  } else {
    return (
      <div className='button'>
        <Link to={props.path}>
          {props.label}
        </Link>
      </div>
    )
  }
}

export default Button;