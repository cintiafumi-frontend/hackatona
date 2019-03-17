import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class FaixaFatura extends Component {
  render() {
    return (
      <div className='container faixaFatura'>
        <Title text='Qual sua média mensal de faturamento?' />
        <input className='faixa' />
        <Button
          path='/resultados'
          label='Continuar'
        />
      </div>
    )
  }
}

export default FaixaFatura;