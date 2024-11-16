import React, { useState, useEffect } from 'react';
import './App.css';
import { createReserva, getReservas, updateReserva, deleteReserva } from './services/reservaService'; 

function App() {
  const [reservas, setReservas] = useState([]);
  const [nombreCliente, setNombreCliente] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [tipoHabitacion, setTipoHabitacion] = useState('');


  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const reservasData = await getReservas();
        setReservas(reservasData);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    };

    fetchReservas();
  }, []);


  const validarFechas = (fechaInicio, fechaFin) => {
    if (!fechaInicio || !fechaFin) {
      alert("Ambas fechas deben ser seleccionadas.");
      return false;
    }
    if (new Date(fechaInicio) >= new Date(fechaFin)) {
      alert("La fecha de inicio debe ser anterior a la fecha de fin.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarFechas(fechaInicio, fechaFin)) return;

    const nuevaReserva = {
      nombre_cliente: nombreCliente,
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin,
      tipo_habitacion: tipoHabitacion,
    };

    try {
      await createReserva(nuevaReserva); 
      setNombreCliente('');
      setFechaInicio('');
      setFechaFin('');
      setTipoHabitacion('');

      const reservasData = await getReservas();
      setReservas(reservasData);
    } catch (error) {
      console.error('Error al crear la reserva:', error);
    }
  };


  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta reserva?')) {
      try {
        await deleteReserva(id); 
       
        const reservasData = await getReservas();
        setReservas(reservasData);
      } catch (error) {
        console.error('Error al eliminar la reserva:', error);
      }
    }
  };


  const handleUpdate = async (id) => {
    const nuevaFechaInicio = prompt('Ingrese nueva fecha de inicio (YYYY-MM-DD):');
    const nuevaFechaFin = prompt('Ingrese nueva fecha de fin (YYYY-MM-DD):');

    if (!nuevaFechaInicio || !nuevaFechaFin) {
      alert("Ambas fechas deben ser ingresadas.");
      return;
    }

    if (!validarFechas(nuevaFechaInicio, nuevaFechaFin)) return;

    const reservaDetalles = {
      fecha_inicio: nuevaFechaInicio,
      fecha_fin: nuevaFechaFin,
    };

    try {
      await updateReserva(id, reservaDetalles); 
      const reservasData = await getReservas();
      setReservas(reservasData);
    } catch (error) {
      console.error('Error al actualizar la reserva:', error);
    }
  };

  return (
    <div className="container">
      <h1>Gestión de Reservas de Hotel</h1>

      {/* Formulario para registrar nuevas reservas */}
      <div className="form-container">
        <h2>Registrar Reserva</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            placeholder="Nombre del Cliente"
            required
          />
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
          <select
            value={tipoHabitacion}
            onChange={(e) => setTipoHabitacion(e.target.value)}
            required
          >
            <option value="">Seleccione tipo de habitación</option>
            <option value="Sencilla">Sencilla</option>
            <option value="Doble">Doble</option>
            <option value="Suite">Suite</option>
          </select>
          <button type="submit">Registrar Reserva</button>
        </form>
      </div>

      {/* Tabla de reservas */}
      <h2>Lista de Reservas</h2>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Tipo de Habitación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.nombre_cliente}</td>
              <td>{reserva.fecha_inicio}</td>
              <td>{reserva.fecha_fin}</td>
              <td>{reserva.tipo_habitacion}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleUpdate(reserva.id)}
                >
                  Actualizar
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(reserva.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
