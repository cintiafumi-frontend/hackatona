import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class Localidade extends Component {
  render() {
    return(
      <div className='container localidade'>
        <Title text='Qual sua localidade?' />
        <input className='local' />
        <Button
          path='/resultados'
          label='Continuar'
        />
      </div>
    )
  }
}

export default Localidade;