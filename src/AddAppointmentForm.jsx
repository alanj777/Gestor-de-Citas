import React, { useState } from 'react';

function AddAppointmentForm({ onAdd }) {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ petName, ownerName, date, time, symptoms });
    setPetName('');
    setOwnerName('');
    setDate('');
    setTime('');
    setSymptoms('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre Mascota</label>
      <input 
        type="text" 
        name="petName" 
        value={petName} 
        onChange={(e) => setPetName(e.target.value)} 
        placeholder="Nombre Mascota" 
        required 
      />

      <label>Nombre Dueño</label>
      <input 
        type="text" 
        name="ownerName" 
        value={ownerName} 
        onChange={(e) => setOwnerName(e.target.value)} 
        placeholder="Nombre dueño de la mascota" 
        required 
      />

      <label>Fecha</label>
      <input 
        type="date" 
        name="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />

      <label>Hora</label>
      <input 
        type="time" 
        name="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required 
      />

      <label>Síntomas</label>
      <textarea 
        name="symptoms" 
        value={symptoms} 
        onChange={(e) => setSymptoms(e.target.value)} 
        placeholder="Síntomas" 
        required 
      />

      <button type="submit" className="button-primary">Agregar Cita</button>
    </form>
  );
}

export default AddAppointmentForm;