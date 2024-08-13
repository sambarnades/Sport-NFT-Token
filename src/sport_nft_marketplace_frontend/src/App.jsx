import { useState } from 'react';
import { sport_nft_marketplace_backend } from 'declarations/sport_nft_marketplace_backend';
import Navigation from './components/Navigation.jsx';
import Dashboard from './components/Dashboard.jsx';


function App() {

  const components = [{
    id: 1,
    name: 'Dashboard',
    component: <Dashboard />,
    toggle: true
  }];

  const getComponents = components.map((component) => {
    return component.component;
  });

  return (
    <main className='container-fluid'>
      <Navigation />
      {getComponents}
    </main>
  );
}

export default App;
