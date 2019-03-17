import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ResultOption = (props) => (
  <div className='option'>
    <div
      className='percentage'
      style={{
        width: props.percentage
      }}
    />
    <div className='content'>
      <Link
        to={props.path}
        className='optionLink'
      >
        <h4 className='bankName'>
          {props.name}
        </h4>
        <p className='tax'>
          {`Juros de ${props.tax}`}
        </p>
      </Link>
    </div>
  </div>

)

export default ResultOption;