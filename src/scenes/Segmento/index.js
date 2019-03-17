import React, { Component } from 'react';
import { Title, Segment } from '../../components';
import './style.css';

class Segmento extends Component {
  render() {
    return (
      <div className='container'>
        <Title text='Qual o segmento do seu negócio?' />
        <div className='wrapper'>
          <div className='row'>
            <Segment
              path='/faturamento'
              segment='seg1'
            />
            <Segment
              path='/faturamento'
              segment='seg2'
            />
            <Segment
              path='/faturamento'
              segment='seg3'
            />
          </div>
          <div className='row'>
            <Segment
              path='/faturamento'
              segment='seg4'
            />
            <Segment
              path='/faturamento'
              segment='seg5'
            />
            <Segment
              path='/faturamento'
              segment='seg6'
            />
          </div>
          <div className='row'>
            <Segment
              path='/faturamento'
              segment='seg7'
            />
            <Segment
              path='/faturamento'
              segment='seg8'
            />
            <Segment
              path='/faturamento'
              segment='seg9'
            />
          </div>
          <div className='row'>
            <Segment
              path='/faturamento'
              segment='seg7'
            />
            <Segment
              path='/faturamento'
              segment='seg8'
            />
            <Segment
              path='/faturamento'
              segment='seg9'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Segmento;