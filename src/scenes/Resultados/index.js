import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Title, ResultOption } from '../../components';
import './style.css';

class Resultados extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Resultados' />
        <div className='banks'>
          <div className='bankOptions'>
            <ResultOption
              name='Vakínea'
              tax='4,6%'
              percentage='86%'
            />
          </div>
          <div className='bankOptions'>
            <ResultOption
              name='Banco Tradinossauro'
              tax='6,8%'
              percentage='70%'
            />
          </div>
          <div className='bankOptions'>
            <ResultOption
              name='Nua'
              tax='12,4%'
              percentage='56%'
            />
          </div>
        </div>
        <div className='mais'>
          <Link className='maisLink' to='/vakinha'>Ver mais</Link>
        </div>
      </div>
    )
  }
}

export default Resultados;
