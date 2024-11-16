import React, { useState } from 'react';
import { createReserva } from '../services/reservaService';

const ReservaForm = ({ onReservaCreada }) => {
  const [nombre, setNombre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [tipoHabitacion, setTipoHabitacion] = useState('Sencilla');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevaReserva = { nombre_cliente: nombre, fecha_inicio: fechaInicio, fecha_fin: fechaFin, tipo_habitacion: tipoHabitacion };
    const reservaCreada = await createReserva(nuevaReserva);
    if (reservaCreada) {
      onReservaCreada();  // Notifica al componente padre que la reserva fue creada
      // Limpiar el formulario
      setNombre('');
      setFechaInicio('');
      setFechaFin('');
      setTipoHabitacion('Sencilla');
    }
  };

  return (
    <div>
      <h2>Registrar Nueva Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Cliente</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha de Inicio</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha de Fin</label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tipo de Habitación</label>
          <select
            value={tipoHabitacion}
            onChange={(e) => setTipoHabitacion(e.target.value)}
            required
          >
            <option value="Sencilla">Sencilla</option>
            <option value="Doble">Doble</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <button type="submit">Registrar Reserva</button>
      </form>
    </div>
  );
};

export default ReservaForm;