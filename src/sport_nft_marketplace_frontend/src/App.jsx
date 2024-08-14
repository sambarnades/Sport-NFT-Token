import { useState } from 'react';
import { sport_nft_marketplace_backend } from 'declarations/sport_nft_marketplace_backend';
import Navigation from './components/Navigation.jsx';
import Dashboard from './components/Dashboard.jsx';
import functions from './functions';

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

  const [identifier, setIdentifier] = useState("null");                                         // Declare UseState for identifier.
  function getDashboard() {       
    document.querySelector(".navigation-component").classList.add("component-hidden");          // Hide navigation component.
    document.querySelector(".dashboard-component").classList.remove("component-hidden");        // Show dashboard component.
    setIdentifier(document.getElementById('identifier').value.toString());                      // Set identifier dynamically.       
  }

  
  return (
    <main className='container-fluid'>
      <Navigation getDashboard={getDashboard} />
      <Dashboard identifier={identifier}/>
    </main>
  );
}

export default App;
