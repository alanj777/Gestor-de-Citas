import React from 'react';
import './App.css';
import AddAppointmentForm from './components/AddAppointmentForm';
import AppointmentList from './components/AppointmentList';

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <AddAppointmentForm />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <AppointmentList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;