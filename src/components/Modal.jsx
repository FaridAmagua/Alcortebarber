import React, { useState } from "react";
import Carousel from "../components/Carousel";

// Lista de servicios disponibles
const availableServices = [
  { id: 1, name: "Corte de pelo", price: 12 },
  { id: 2, name: "Lavado y secado", price: 8 },
  { id: 3, name: "Manicura", price: 10 },
  // Agrega más servicios según sea necesario
];

const Modal = ({ isOpen, onClose }) => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  if (!isOpen) return null;

  const today = new Date();
  const currentMonth = today.toLocaleString("es-ES", { month: "long" }).toUpperCase();
  const currentYear = today.getFullYear();

  const openServiceModal = () => setIsServiceModalOpen(true);
  const closeServiceModal = () => setIsServiceModalOpen(false);

  // Manejar la selección de servicios
  const handleServiceClick = (service) => {
    setSelectedServices((prevSelected) => {
      // Si el servicio ya está seleccionado, lo deselecciona
      if (prevSelected.find((s) => s.id === service.id)) {
        return prevSelected.filter((s) => s.id !== service.id);
      } else {
        // Si no está seleccionado, lo agrega a la lista
        return [...prevSelected, service];
      }
    });
  };

  // Simular el envío al backend (aquí pondrías tu lógica de petición)
  const handleConfirmAppointment = () => {
    const appointmentData = {
      date: today,  // Cambia a la fecha seleccionada si tienes un selector
      services: selectedServices,
    };
    console.log("Enviando cita al backend:", appointmentData);
    onClose();
  };

  return (
    <>
      {/* Modal de Reserva */}
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-gray-100 p-8 rounded-xl shadow-lg w-4/6">
          <h1>{`${currentMonth} ${currentYear}`}</h1>
          <p>Selecciona el día de la cita:</p>
          <Carousel />

          <div onClick={openServiceModal} className="cursor-pointer text-blue-700">
            + Añadir servicio
          </div>

          <button onClick={handleConfirmAppointment}>Confirmar Cita</button>
        </div>
      </div>

      {/* Modal de Servicios */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg w-4/6">
            <h2>Selecciona un Servicio</h2>
            <ul>
              {availableServices.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className={`px-4 py-2 m-1 ${
                      selectedServices.find((s) => s.id === service.id)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {service.name} - ${service.price}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={closeServiceModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
