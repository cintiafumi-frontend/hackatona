import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class Faturamento extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Você a média do seu faturamento?' />
        <div className='yesNoGroup'>
          <Button
            path='/faixaFatura'
            icon='thumbsUp'
            label='Sim?'
          />
          <Button
            path='/faixaFatura'
            icon='thumbsDown'
            label='Não'
          />
        </div>
      </div>
    )
  }
}

export default Faturamento;