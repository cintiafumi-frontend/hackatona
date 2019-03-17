import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class Negocio extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Você já tem um negócio?' />
        <div className='yesNoGroup'>
          <Button
            path='/cnpj'
            icon='thumbsUp'
            label='Sim?'
          />
          <Button
            path='/cnpj'
            icon='thumbsDown'
            label='Não'
          />
        </div>
      </div>
    )
  }
}

export default Negocio;