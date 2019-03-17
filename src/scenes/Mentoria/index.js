import React, { Component } from 'react';
import { Title, Mentor } from '../../components';
import './style.css';

class Mentoria extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Essas são suas mentoras que combinam com seu perfil' />
        <div className='mentoring'>
          <Mentor
            path='/'
            name='Denise S. Silva'
            title='contadora'
          />
          <Mentor
            path='/'
            name='Beatriz da Costa'
            title='administradora'
          />
        </div>
      </div>
    )
  }
}

export default Mentoria;