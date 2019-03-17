import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class FaixaFatura extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Qual sua média mensal de faturamento?' />
        <div className='yesNoGroup'>
          <Button
            path='/localidade'
            label='Continuar'
          />
          <Button
            path='/localidade'
            label='Ganho mais de R$ 6750,00'
          />
        </div>
      </div>
    )
  }
}

export default FaixaFatura;