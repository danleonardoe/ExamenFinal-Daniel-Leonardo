package com.hotelreservas.hotel_reservasDL.repository;
import com.hotelreservas.hotel_reservasDL.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    
}