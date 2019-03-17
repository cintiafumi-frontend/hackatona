import React, { Component } from 'react';
import { Title, Button } from '../../components';
import './style.css';

class Vakinha extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Vakínea' />
        <div className='fintech'>
          <div className='logo'>
          
          </div>
          <div className='description'>
            <small>CROWDFUNDING</small>
            <p className='match'>86% de match com seu perfil</p>
            <small>Juros de 4,6%</small>
          </div>
        </div>
        <div className='infos'>
          <div className='list'>
            <h4>
              Vantagens:
            </h4>
            <ul>
              <li>Rápido retorno</li>
              <li>Fácil de planejar</li>
              <li>Sem juros</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className='need'>
            <h4>
              Você precisa:
            </h4>
            <ul>
              <li>Máximo detalhamento do seu plano</li>
              <li>Comover as pessoas com sua iniciativa</li>
              <li>Impacto social</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
        <div className='buttonGroup'>
          <Button
            path='/mentoria'
            label='Ver mentoria'
          />
          <Button
            path='/mentoria'
            label='Ver outras opções'
          />
        </div>
        <div className='external'>
          <a href='https://www.vakinha.com.br/' className='externalLink' target='_blank' rel='noopener noreferrer'>Ir para Vakinha</a>
        </div>
      </div>
    )
  }
}

export default Vakinha;