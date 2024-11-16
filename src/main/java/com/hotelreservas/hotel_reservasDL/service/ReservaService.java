package com.hotelreservas.hotel_reservasDL.service;

import com.hotelreservas.hotel_reservasDL.model.Reserva;
import com.hotelreservas.hotel_reservasDL.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    public Reserva crearReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    public List<Reserva> obtenerTodasLasReservas() {
        return reservaRepository.findAll();
    }

    public Optional<Reserva> obtenerReservaPorId(Long id) {
        return reservaRepository.findById(id);
    }

    public Reserva actualizarReserva(Long id, Reserva reservaDetalles) {
        Optional<Reserva> reserva = reservaRepository.findById(id);

        if (reserva.isPresent()) {
            Reserva reservaExistente = reserva.get();
            reservaExistente.setNombreCliente(reservaDetalles.getNombreCliente());
            reservaExistente.setFechaInicio(reservaDetalles.getFechaInicio());
            reservaExistente.setFechaFin(reservaDetalles.getFechaFin());
            reservaExistente.setTipoHabitacion(reservaDetalles.getTipoHabitacion());

            return reservaRepository.save(reservaExistente);
        }

        return null;  
    }

    public void cancelarReserva(Long id) {
        reservaRepository.deleteById(id);
    }
}