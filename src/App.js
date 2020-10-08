import React from 'react';
import HomeScreen from './ui/screens/home';

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <header className="App-header">
        <div style={{ textAlign: "center" }}>
          <h1>forEach Reto</h1>
          <p>
            Este es el proyecto front para el reto forEach({'=>'})
        </p>

        </div>

        <HomeScreen />
      </header>
    </div>
  );
}

export default App;
