import React, { Component } from 'react';
import { Title, ResultOption } from '../../components';
import './style.css';

class Resultados extends Component {
  render() {
    return(
      <div className='container'>
        <Title text='Resultados' />
        <div className='bankOptions'>
          <ResultOption
            name='Vakínea'
            tax='4,6%'
            percentage='86%'
          />
        </div>
        <div className='bankOptions'>
          <ResultOption
            name='Banco do Polvo'
            tax='4,6%'
            percentage='86%'
          />
        </div>
        <div className='bankOptions'>
          <ResultOption
            name='Nua'
            tax='4,6%'
            percentage='86%'
          />
        </div>
      </div>
    )
  }
}

export default Resultados;
