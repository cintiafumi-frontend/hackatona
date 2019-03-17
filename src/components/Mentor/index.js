import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Mentor = (props) => {
  if (props.mentor === 'contadora') {
    return (
      <div className='card'>
        <Link to={props.path}>
          {/* imagem */}
          <p className='name'>{props.name}</p>
          <small>{props.title}</small>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='card'>
        <Link to={props.path}>
          {/* imagem */}
          <p className='name'>{props.name}</p>
          <small>{props.title}</small>
        </Link>
      </div>
    )

  }
}

export default Mentor;