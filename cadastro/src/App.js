import React from 'react';
import Login from './telas/login/login';
import Img from './componentes/img';
import ButtonGroup from './componentes/ButtonGroup';

function App() {
  return (
    <div>
      <ButtonGroup>
        <Img>logo do orgamico</Img>
        <Login />
      </ButtonGroup>

    </div>
  );
}

export default App;
