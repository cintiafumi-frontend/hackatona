import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Home,
  Cnpj,
  FaixaFatura,
  Faturamento,
  Localidade,
  Mentoria,
  Negocio,
  Resultados,
  SaibaMais,
  Segmento,
  Vakinha
} from './scenes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cnpj' component={Cnpj} />
      <Route path='/faturamento' component={Faturamento} />
      <Route path='/faixaFatura' component={FaixaFatura} />
      <Route path='/localidade' component={Localidade} />
      <Route path='/mentoria' component={Mentoria} />
      <Route path='/negocio' component={Negocio} />
      <Route path='/resultados' component={Resultados} />
      <Route path='/saibaMais' component={SaibaMais} />
      <Route path='/segmento' component={Segmento} />
      <Route path='/vakinha' component={Vakinha} />
      <Route path='/' exact={true} component={Home} />
    </Switch>
  </BrowserRouter>
  ,

  document.getElementById('root')
);
serviceWorker.unregister();