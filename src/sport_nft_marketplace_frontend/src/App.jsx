import { useState } from 'react';
import { sport_nft_marketplace_backend } from 'declarations/sport_nft_marketplace_backend';
import Navigation from './components/Navigation.jsx';
import Dashboard from './components/Dashboard.jsx';
import LoginPanel from './components/LoginPanel.jsx';
import NFT from './components/NFTs.jsx';

var chance = new Chance(Math.random);

function App() {

  // ------------ LIST OF COMPONENTS ------------------ //

  const components = [
    {
      id: 1,                                // Must improve.
      name: 'Navigation',
      component: <Navigation />,
      isActive: true
    },
    {
      id: 2,
      name: 'LoginPanel',
      component: <LoginPanel />,
      isActive: true
    },
    {
      id: 3,
      name: 'Dashboard',
      component: <Dashboard />,
      isActive: false
    }
  ];

  // ------------ DASHBOARD CALL ------------------ //

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginState, setLoginState] = useState("Sign Up");                                         // Declare UseState for login state.
  const [identifier, setIdentifier] = useState(false);                                         // Declare UseState for identifier.
  const dashboard = <Dashboard />
  function login() {
    setIsLoggedIn(true);
    setLoginState("Sign Out");
    setIdentifier(document.getElementById('identifier').value.toString());                      // Set identifier dynamically.       
  }

  function logout() {
    setIsLoggedIn(false);
    setLoginState("Sign Up");
    setIdentifier("null");
  }


  // ------------ RENDERING ------------------ //

  return (
    <main className='container-fluid'>
      <Navigation loginState={loginState} logout={logout} />
      {isLoggedIn ?

        <div className='container'>
          <Dashboard identifier={identifier} />
          <div className='row row-cols-2 row-cols-lg-4'>
            <NFT />
          </div>
        </div>

        : <LoginPanel login={login} />}

    </main>
  );
}

export default App;
