import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class Cnpj extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Você é uma pessoa física ou jurídica?' />
        <div className='yesNoGroup'>
          <Button
            path='/segmento'
            label='Física (Não tenho CNPJ)'
          />
          <Button
            path='/segmento'
            label='Jurídica (Tenho CNPJ)'
          />
        </div>
      </div>
    )
  }
}

export default Cnpj;