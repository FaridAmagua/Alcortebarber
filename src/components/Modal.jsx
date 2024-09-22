import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import Carousel from "../components/Carousel";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si no está abierto, no se muestra nada

  // Obtener la fecha actual
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // Función para formatear la fecha
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  };

  // Obtener el mes y año actual
  const currentMonth = today
    .toLocaleString("es-ES", { month: "long" })
    .toUpperCase();
  const currentYear = today.getFullYear();

  // Manejar el cambio de selección de fecha
  const handleDateClick = (day) => {
    const newDate = new Date(today.getFullYear(), today.getMonth(), day);
    setSelectedDate(newDate);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="font-sans bg-gray-100 p-8 rounded-xl shadow-lg w-5/6 md:w-4/6 lg:w-2/6 h-3/4 flex flex-col">
        <div className="flex flex-col flex-grow mx-3">
          {/* MODAL HEADER */}
          <div className="flex justify-between items-center border-b border-gray-300 py-2">
            <div className="flex items-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-800">
                {`${currentMonth} ${currentYear}`}
              </h1>
            </div>

            <div
              onClick={onClose}
              className="bg-gray-100 text-gray-500 hover:bg-gray-300 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
            >
              x
            </div>
          </div>
          {/* MODAL HEADER */}

          {/* Contenedor 1 */}
          <div className="mb-4 rounded">
            <h2 className="text-xl text-gray-700">
              Selecciona el día de la cita:
            </h2>
            <Carousel />
          </div>

          {/* Contenedor 2 */}
          <div className="mb-4 bg-gray-200 p-4 rounded">
            <div className="flex justify-between items-center">
              <div className="font-bold text-gray-800">Corte de pelo</div>
              <div className="text-gray-600">$12</div>
            </div>
          </div>

          {/* Contenedor 3: cost/tiempo, ocupa espacio restante */}
          <div className="mb-4 bg-gray-200 p-4 rounded flex-grow">
            <div>
              <span className="font-bold text-gray-800">Coste:</span> $12
            </div>
            <div>
              <span className="font-bold text-gray-800">Tiempo:</span> 1 hora
            </div>
          </div>
        </div>

        {/* Botón que queda alineado al fondo */}
        <div className="mx-3">
          <button
            onClick={onClose}
            className="bg-blue-700 text-white py-2 rounded-lg w-full hover:bg-blue-800 transition-colors duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
