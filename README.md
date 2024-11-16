# ExamenFinal-Daniel-Leonardo
Daniel Alejandro Leonardo Ericastilla-Carné:9989-23-12487-Sección 3- Examen Final Programación 2
Descripción del Proyecto
Este proyecto es una aplicación web de Gestión de Reservas de Hotel. Permite a los usuarios registrar, consultar, actualizar y eliminar reservas en el sistema. La aplicación está dividida en dos partes:

Backend (API): Proporciona los servicios RESTful para interactuar con la base de datos, gestionando las reservas.
Frontend (Interfaz de Usuario): Una aplicación web que permite a los usuarios interactuar con el sistema de reservas a través de un formulario para ingresar nuevas reservas, visualizar las existentes, y modificarlas o eliminarlas.
Tecnologías Utilizadas
Backend:
Java (Spring Boot)
Hibernate/JPA para la persistencia de datos.
MySQL como base de datos.
Frontend:
React.js para la construcción de la interfaz de usuario.
Axios para realizar las solicitudes HTTP a la API.
CSS para el diseño de la interfaz.
Ejecución del Proyecto
1. Configuración del Backend
Requisitos Previos:
Java 17 o superior.
Maven (o Gradle) para la gestión de dependencias.
MySQL o cualquier otra base de datos compatible con JPA.
Pasos para ejecutar el Backend:
Clonar el Repositorio del Backend:

bash
Copiar código
git clone <URL_del_repositorio_backend>
cd <directorio_del_backend>
Configurar la Base de Datos:

Crea una base de datos en MySQL llamada, por ejemplo, hotel_reservas.
Abre el archivo src/main/resources/application.properties y configura la conexión a la base de datos:
properties
Copiar código
spring.datasource.url=jdbc:mysql://localhost:3306/hotel_reservas
spring.datasource.username=root
spring.datasource.password=tu_contraseña
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
Ejecutar el Backend: Para ejecutar la aplicación Spring Boot, puedes usar uno de estos comandos:

Si usas Maven:

bash
Copiar código
mvn spring-boot:run
O si usas Gradle:

bash
Copiar código
./gradlew bootRun
Una vez iniciado el backend, la API estará corriendo en http://localhost:8080.

2. Configuración del Frontend
Requisitos Previos:
Node.js y npm (o Yarn) instalados.

Puedes verificar si tienes Node.js instalado con el siguiente comando:

bash
Copiar código
node -v
Si no lo tienes instalado, puedes descargarlo desde aquí.

Pasos para ejecutar el Frontend:
Clonar el Repositorio del Frontend:

bash
Copiar código
git clone <URL_del_repositorio_frontend>
cd <directorio_del_frontend>
Instalar las dependencias:

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
bash
Copiar código
npm install
Configurar las solicitudes al Backend: En el archivo src/services/reservaService.js, asegúrate de que las URL de las solicitudes HTTP coincidan con la dirección de tu backend. Por defecto, debería estar configurado para hacer peticiones a http://localhost:8080.

Ejemplo de un servicio de reserva:

javascript
Copiar código
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reservas';

export const getReservas = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createReserva = async (nuevaReserva) => {
  const response = await axios.post(API_URL, nuevaReserva);
  return response.data;
};

export const updateReserva = async (id, reservaDetalles) => {
  const response = await axios.put(`${API_URL}/${id}`, reservaDetalles);
  return response.data;
};

export const deleteReserva = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
Ejecutar el Frontend:

Para iniciar la aplicación de React, ejecuta el siguiente comando:
bash
Copiar código
npm start
Esto abrirá el frontend en http://localhost:3000.

Endpoints del Backend
La API RESTful proporciona varios endpoints para interactuar con las reservas del hotel.

Obtener todas las reservas:

Método: GET
URL: /api/reservas
Descripción: Devuelve una lista de todas las reservas.
Crear una nueva reserva:

Método: POST
URL: /api/reservas
Cuerpo de la solicitud:
json
Copiar código
{
  "nombre_cliente": "Juan Pérez",
  "fecha_inicio": "2024-12-01",
  "fecha_fin": "2024-12-05",
  "tipo_habitacion": "Suite"
}
Actualizar una reserva:

Método: PUT
URL: /api/reservas/{id}
Cuerpo de la solicitud:
json
Copiar código
{
  "fecha_inicio": "2024-12-03",
  "fecha_fin": "2024-12-07"
}
Eliminar una reserva:

Método: DELETE
URL: /api/reservas/{id}
Descripción: Elimina una reserva específica por ID.
