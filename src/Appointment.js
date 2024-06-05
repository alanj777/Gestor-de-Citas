import React from 'react';

function Appointment({ appointment, onDelete }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{appointment.petName}</span></p>
      <p>Dueño: <span>{appointment.ownerName}</span></p>
      <p>Fecha: <span>{appointment.date}</span></p>
      <p>Hora: <span>{appointment.time}</span></p>
      <p>Síntomas: <span>{appointment.symptoms}</span></p>
      <button 
        className="button eliminar" 
        onClick={onDelete}
      >
        Eliminar ×
      </button>
    </div>
  );
}

export default Appointment;