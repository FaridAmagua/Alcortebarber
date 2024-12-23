import React from "react";

const SelectedServicesBar = ({ selectedServices, onClearSelection }) => {
  const servicePrices = {
    "Corte Clásico": 15,
    "Arreglo de Barba": 10,
    "Corte Moderno": 18,
    "Estilismo Personalizado": 25,
    "Tinte de Cabello": 30,
    "Corte Infantil": 12,
    "Corte a Navaja": 20,
    "Tratamiento Capilar": 35,
  };

  const total = selectedServices.reduce((sum, service) => {
    return sum + (servicePrices[service] || 0);
  }, 0);

  if (selectedServices.length === 0) {
    return null; // No mostrar la barra si no hay servicios seleccionados
  }

  return (
<div className="sticky bottom-0 w-full bg-white shadow-lg p-4">
<div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold">Servicios Seleccionados:</h4>
          <ul className="text-gray-700">
            {selectedServices.map((service, index) => (
              <li key={index} className="text-sm">
                {service} - ${servicePrices[service] || 0}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-gray-800 font-semibold">Total: ${total}</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onClearSelection}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:text-red-800 text-sm"
          >
            Limpiar Selección
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedServicesBar;
