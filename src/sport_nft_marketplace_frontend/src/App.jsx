import { useState } from 'react';
import { sport_nft_marketplace_backend } from 'declarations/sport_nft_marketplace_backend';
import Navigation from './components/Navigation.jsx';
import Dashboard from './components/Dashboard.jsx';
import LoginPanel from './components/LoginPanel.jsx';

function App() {

  // ------------ LIST OF COMPONENTS ------------------ //

  const components = [
    {
      id: 1,
      name: 'Navigation',
      component: <Navigation />,
      toggle: true
    },
    {
      id: 2,
      name: 'Dashboard',
      component: <Dashboard />,
      toggle: false
    }
  ];

  // ------------ DASHBOARD CALL ------------------ //

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginState, setLoginState] = useState("Sign Up");                                         // Declare UseState for login state.
  const [identifier, setIdentifier] = useState(false);                                         // Declare UseState for identifier.
  const dashboard = <Dashboard />
  function login() {
  //   document.querySelector(".login-component").classList.add("component-hidden");          // Hide navigation component.
  //   document.querySelector(".dashboard-component").classList.remove("component-hidden");        // Show dashboard component.

    setIsLoggedIn(true);
    setLoginState("Sign Out");
    setIdentifier(document.getElementById('identifier').value.toString());                      // Set identifier dynamically.       
  }

  function logout() {
    // document.querySelector(".login-component").classList.remove("component-hidden");         // Show navigation component.
    // document.querySelector(".dashboard-component").classList.add("component-hidden");           // Hide dashboard component.
    setIsLoggedIn(false);
    setLoginState("Sign Up");
    setIdentifier("null");
  }


  // ------------ RENDERING ------------------ //

  return (
    <main className='container-fluid'>
      <Navigation loginState={loginState} logout={logout} />
      {isLoggedIn ? <Dashboard identifier = {identifier} /> : <LoginPanel login={login} />}

    </main>
  );
}

export default App;
