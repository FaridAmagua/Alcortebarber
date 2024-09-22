import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: true, // Asegúrate de tener flechas activadas
    variableWidth: true, // Activa el ancho variable
  };
  // Datos hardcodeados para el slider, cada día con fecha
  const citasDisponibles = [
    { dia: "Lun.", fecha: "12 jul", disponible: true },
    { dia: "Mar.", fecha: "13 jul", disponible: false },
    { dia: "Mié.", fecha: "14 jul", disponible: true },
    { dia: "Jue.", fecha: "15 jul", disponible: false },
    { dia: "Vie.", fecha: "16 jul", disponible: true },
    { dia: "Sáb.", fecha: "17 jul", disponible: false },
    { dia: "Dom.", fecha: "18 jul", disponible: false },
  ];

  return (
    <div className="block font-sans text-sm text-black font-bold text-center mt-2 mx-1">
      <Slider {...settings}>
        {citasDisponibles.map((dia, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg w-32 p-4 shadow-md text-center"
          >
            <p className="m-0 text-lg font-bold text-gray-800">{dia.dia}</p>
            <p className="m-0 text-gray-600">{dia.fecha}</p>
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
      <Slider {...settings} className="mt-5">
        <div className="bg-white border py-2 px-4 rounded rounded-lg text-black">
          12:30
        </div>
        <div className="bg-white border py-2 px-4 rounded rounded-lg text-black">
          12:30
        </div>{" "}
        <div className="bg-white border py-2 px-4 rounded rounded-lg text-black">
          12:30
        </div>{" "}
        <div className="bg-white border py-2 px-4 rounded rounded-lg text-black">
          12:30
        </div>{" "}
        <div className="bg-white border py-2 px-4 rounded rounded-lg text-black">
          12:30
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
