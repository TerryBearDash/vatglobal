import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { HeaderContainer } from './components/header/header.container';
import { store } from './components/configure-store';

const App = () => {
  return (
    <Provider store={store} key={new Date().getTime()}>
      <div className="App" key={new Date().getTime()}>
        <HeaderContainer key={new Date().getTime()} />
      </div>
    </Provider>
  )
};

export default App;
