import React from 'react';

const ReservaItem = ({ reserva, onEliminar }) => {
  return (
    <tr>
      <td>{reserva.nombre_cliente}</td>
      <td>{reserva.fecha_inicio}</td>
      <td>{reserva.fecha_fin}</td>
      <td>{reserva.tipo_habitacion}</td>
      <td>
        <button onClick={() => onEliminar(reserva.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ReservaItem;
