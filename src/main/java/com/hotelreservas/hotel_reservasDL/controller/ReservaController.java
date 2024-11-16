package com.hotelreservas.hotel_reservasDL.controller;

import com.hotelreservas.hotel_reservasDL.model.Reserva;
import com.hotelreservas.hotel_reservasDL.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "http://localhost:5173") // Permite solicitudes desde el frontend
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    // Registra una nueva reserva
    @PostMapping
    public ResponseEntity<Reserva> crearReserva(@RequestBody Reserva reserva) {
        Reserva nuevaReserva = reservaService.crearReserva(reserva);
        return new ResponseEntity<>(nuevaReserva, HttpStatus.CREATED);
    }

    // Lista todas las reservas
    @GetMapping
    public List<Reserva> obtenerTodasLasReservas() {
        return reservaService.obtenerTodasLasReservas();
    }

    // Actualiza una reserva
    @PutMapping("/{id}")
    public ResponseEntity<Reserva> actualizarReserva(
            @PathVariable Long id, @RequestBody Reserva reservaDetalles) {
        Reserva reservaActualizada = reservaService.actualizarReserva(id, reservaDetalles);
        return reservaActualizada != null
                ? new ResponseEntity<>(reservaActualizada, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Cancela una reserva
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancelarReserva(@PathVariable Long id) {
        reservaService.cancelarReserva(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}