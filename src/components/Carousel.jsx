import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(null); // Estado para la tarjeta seleccionada

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    arrows: true, // Asegúrate de tener flechas activadas
    variableWidth: true, // Activa el ancho variable
  };

  // Datos hardcodeados para el slider, cada día con fecha
  const citasDisponibles = [
    { dia: "Lun.", fecha: "12 jul", disponible: true },
    { dia: "Mar.", fecha: "13 jul", disponible: true },
    { dia: "Mié.", fecha: "14 jul", disponible: true },
    { dia: "Jue.", fecha: "15 jul", disponible: false },
    { dia: "Vie.", fecha: "16 jul", disponible: true },
    { dia: "Sáb.", fecha: "17 jul", disponible: false },
    { dia: "Dom.", fecha: "18 jul", disponible: false },
  ];

  return (
    <div className="block font-sans text-sm text-black font-bold text-center mt-2 mx-[5px]">
      <Slider {...settings}>
        {citasDisponibles.map((dia, index) => (
          <div
            key={index}
            onClick={() => dia.disponible && setSelectedIndex(index)} // Solo seleccionable si disponible es true
            className={`rounded-lg w-32 p-4 shadow-md text-center cursor-pointer transition-transform transform 
              ${dia.disponible ? "bg-white" : "bg-gray-100 cursor-not-allowed"} 
              ${selectedIndex === index ? "border-4 border-blue-500" : ""}
              hover:shadow-lg hover:scale-105`} // Efecto de hover solo para las tarjetas disponibles
          >
            <p className="m-0 text-lg font-bold">{dia.dia}</p>
            <p className="m-0 text-black">{dia.fecha}</p>
            <div className="flex justify-center items-center mt-4">
              {/* Indicador de disponibilidad: verde si disponible, rojo si no disponible */}
              <span
                className={`w-2 h-2 rounded-full ${
                  dia.disponible ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
