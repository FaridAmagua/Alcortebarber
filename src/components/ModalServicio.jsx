import React, { useState } from "react";
import Carousel from "../components/Carousel";

const Modal = ({ isOpen, onClose }) => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  if (!isOpen) return null;

  const today = new Date();
  const currentMonth = today.toLocaleString("es-ES", { month: "long" }).toUpperCase();
  const currentYear = today.getFullYear();

  const openServiceModal = () => setIsServiceModalOpen(true);
  const closeServiceModal = () => setIsServiceModalOpen(false);

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

          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>

      {/* Modal de Servicios */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg w-4/6">
            <h2>Selecciona un Servicio</h2>
            {/* Aquí va la lista de servicios */}
            <button onClick={closeServiceModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
