import { useState } from 'react';
import { sport_nft_marketplace_backend } from 'declarations/sport_nft_marketplace_backend';
import Navigation from './components/Navigation.jsx';

function connexionSubmit() {
  let identifier = document.getElementById('identifier').value.toString();
  console.log(identifier);


}

function App() {


  return (
    <main className='container-fluid'>
     <Navigation />
    </main>
  );
}

export default App;
