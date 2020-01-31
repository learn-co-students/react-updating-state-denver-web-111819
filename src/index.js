import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from "./components/ClickityClick"
import ButtonClicker from './components/ButtonClicker';
import LightSwitch from './components/LightSwitch';

ReactDOM.render(
  <div>
    <ClickityClick />
    <ButtonClicker />
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
