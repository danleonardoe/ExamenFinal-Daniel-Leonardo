import React, { useEffect, useState } from 'react';
import { getReservas, deleteReserva } from '../services/reservaService';
import ReservaItem from './ReservaItem';

const ReservaList = () => {
  const [reservas, setReservas] = useState([]);

  const fetchReservas = async () => {
    const reservasData = await getReservas();
    setReservas(reservasData);
  };

  const handleEliminar = async (id) => {
    await deleteReserva(id);
    fetchReservas();  // Recarga la lista de reservas
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre Cliente</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Tipo de Habitación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <ReservaItem
              key={reserva.id}
              reserva={reserva}
              onEliminar={handleEliminar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservaList;
