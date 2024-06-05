import React from 'react';

function AppointmentList({ appointments, onDelete }) {
  return (
    <div className="lista-citas">
      {appointments.map((appointment, index) => (
        <div key={index} className="cita">
          <p>Mascota: <span>{appointment.petName}</span></p>
          <p>Dueño: <span>{appointment.ownerName}</span></p>
          <p>Fecha: <span>{appointment.date}</span></p>
          <p>Hora: <span>{appointment.time}</span></p>
          <p>Síntomas: <span>{appointment.symptoms}</span></p>
          <button 
            className="button eliminar" 
            onClick={() => onDelete(index)}
          >
            Eliminar ×
          </button>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;