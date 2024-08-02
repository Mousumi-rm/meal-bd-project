import React from 'react';
import Header from './component/Header/Header';
import { Outlet  } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet/>
    </div>
  );
};

export default App;