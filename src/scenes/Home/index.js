import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';
import Woman1 from './img/woman1.png'
import Woman2 from './img/woman2.png'

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Quer alavancar seus sonhos?' />
        <p className='persona'>Quer conhecer a história de</p>
        <div className='story'>
          <div className='storyCard'>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={Woman1} alt="Esteticista" className='woman' />
                </div>
                <div class="flip-card-back">
                  <p className='text'>Érika Nascimento, de 32 anos, não tinha renda própria, mas tinha o sonho de abrir um salão em casa para poder trabalhar e ter independencia financeira. Com mentoria e um microcrédito Érika se realizou e atualmente tem seu próprio espaço.
"Hoje sei que posso fazer o que eu quiser”</p>
                </div>
              </div>
            </div>
          </div>
          <div className='storyCard'>
            <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Woman2} alt="Professora" className='woman' />
              </div>
              <div class="flip-card-back">
                <p className='text'>Érika Nascimento, de 32 anos, não tinha renda própria, mas tinha o sonho de abrir um salão em casa para poder trabalhar e ter independencia financeira. Com mentoria e um microcrédito Érika se realizou e atualmente tem seu próprio espaço.
"Hoje sei que posso fazer o que eu quiser”</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Button
        path='/negocio'
        label='Vamos alavancar a sua?'
      />
      </div >
    )
  }
}

export default Home;