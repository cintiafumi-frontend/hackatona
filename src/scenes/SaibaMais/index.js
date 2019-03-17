import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class Localidade extends Component {
  render() {
    return (
      <div className='container saibaMais'>
        <Title text='Vamos ver um pouco?' />
        <div className='video'>
          <iframe width="300" height="215" src="https://www.youtube.com/embed/b1ljunUBjsQ" frameBorder="0" allow="autoplay; encrypted-media;" allowFullScreen title="Vakinha"/>
        </div>
        <Button
          path='/resultados'
          label='Continuar'
        />
      </div>
    )
  }
}

export default Localidade;