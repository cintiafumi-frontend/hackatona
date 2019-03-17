import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class Home extends Component {
  render() {
    return(
      <div className='container'>
        <Title text='Quer alavancar seus sonhos?' />
        <p className='persona'>Quer conhecer a história de Cintiarela</p>
        <div className='story'>
          <div className='storyCard'>

          </div>
          <div className='storyCard'>

          </div>
        </div>
        <Button
          path='/negocio'
          label='Vamos alavancar a sua?'
        />
      </div>
    )
  }
}

export default Home;