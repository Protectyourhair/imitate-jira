import React from 'react';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import { Login } from 'screens/login';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <ProjectListScreen /> */}
    </div>
  );
}

export default App;
