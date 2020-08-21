import React, { useState } from 'react';
import './App.css';
import DashboardControl from 'devexpress-dashboard-react';

function switchMode(props) {
  return props === 'Viewer' ? "Designer" : "Viewer";
}

function App() {
  const [workingModeVar, setWorkingMode] = useState("Designer");
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <button onClick={() => { setWorkingMode(switchMode(workingModeVar)) }}>Switch to {switchMode(workingModeVar)}</button>
      <DashboardControl style={{ height: '90%' }} 
        endpoint="https://localhost:5001/dashboard/api"
        workingMode={workingModeVar}>
      </DashboardControl>
  </div>
  );
}

export default App;