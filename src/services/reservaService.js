import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reservas'; // Dirección de tu backend

// Crear una nueva reserva
export const createReserva = async (reserva) => {
  try {
    const response = await axios.post(API_URL, reserva);
    return response.data; // Devuelve la reserva creada
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    throw error;
  }
};

// Obtener todas las reservas
export const getReservas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Devuelve la lista de reservas
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
    throw error;
  }
};

// Actualizar una reserva por su ID
export const updateReserva = async (id, reservaDetalles) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, reservaDetalles);
    return response.data; // Devuelve la reserva actualizada
  } catch (error) {
    console.error('Error al actualizar la reserva:', error);
    throw error;
  }
};

// Cancelar una reserva por su ID
export const deleteReserva = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error al cancelar la reserva:', error);
    throw error;
  }
};
