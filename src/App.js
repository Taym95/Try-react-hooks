import React from 'react';
import logo from './logo.svg';
import './App.css';


function userMousePositions() {
  const [positions, setMousePostions] = React.useState({ positionsX: 100, positionsY: 100 });

  function onMouseMove(e) {
    setMousePostions({ positionsX: e.clientX, positionsY: e.clientY });
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    };
  }, []);

  return positions;
}

function App() {
  const mousePostions = userMousePositions();
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" style={{ top: `${mousePostions.positionsY-100}px`, left: `${mousePostions.positionsX-100}px` }} />
    </div>
  )
}

export default App;
