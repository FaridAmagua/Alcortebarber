import React, { useState } from "react";
import Img1 from "@/assets/imgs/img-1.jpeg";
import TeamCarousel from "../components/TeamCarousel";
import SelectedServicesBar from "../components/SelectedServicesBar";
import { useFetchSite } from "../hooks/HomeHook";
export const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [expandedCategories, setExpandedCategories] = useState({}); 
  const [selectedServices, setSelectedServices] = useState([]);

  // const toggleSchedule = () => setIsOpen(!isOpen);

  const handleClearSelection = () => {
    setSelectedServices([]);
  };

  const handleToggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  // const toggleCategory = (category) => {
  //   setExpandedCategories((prev) => ({
  //     ...prev,
  //     [category]: !prev[category],
  //   }));
  // };

  const popularServices = [
    "Corte Clásico",
    "Arreglo de Barba",
    "Corte Moderno",
    "Estilismo Personalizado",
    "Tinte de Cabello",
    "Corte 1",
    "Arreglo de 1",
    "Corte 2",
    "Estilismo 3",
    "Tinte de 5",
    
  ];

  // const servicesByCategory = {
  //   Cortes: [
  //     "Corte Clásico",
  //     "Corte Moderno",
  //     "Corte Infantil",
  //     "Corte a Navaja",
  //   ],
  //   Tratamientos: ["Tinte de Cabello", "Tratamiento Capilar"],
  //   Barba: ["Arreglo de Barba", "Estilismo Personalizado"],
  // };

  // const dynamicPadding = selectedServices.length > 0 ? "pb-24" : "pb-8";

  return (
<div
  className={`bg-white text-gray-800 min-h-screen flex flex-col justify-between relative`}
>
      {/* Contenido principal */}
      <header className="flex flex-col md:flex-row w-full items-start justify-between max-w-screen-xl mx-auto pt-20">
        {/* Parte izquierda */}
        <div className="w-full md:w-2/3 flex flex-col space-y-6 p-4">
          <img
            src={Img1}
            alt="Barbería"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          {/* Servicios populares */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold">Bienvenidos a Al Corte Barber</h2>
            {/* <p>{siteData?.address|| "Direccion no disponible"}</p> */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">Servicios Populares</h3>
              <ul className="list-none space-y-2">
                {popularServices.map((service, index) => (
                  <li key={index} className="flex justify-between items-center">
                    {service}
                    <button
                      onClick={() => handleToggleService(service)}
                      className={`text-sm ${
                        selectedServices.includes(service) ? "text-red-500" : "text-blue-500"
                      }`}
                    >
                      {selectedServices.includes(service) ? "Quitar" : "Añadir"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Parte derecha */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Quienes Somos</h2>
            <p>
              Somos un salón de barberos especializado en cortes de calidad, brindando un servicio único.
            </p>
            <div className="mt-6">
              <TeamCarousel />
            </div>
          </div>
        </div>
      </header>
      {/* Barra flotante */}
      <SelectedServicesBar
        selectedServices={selectedServices}
        onClearSelection={handleClearSelection}
      />
      {/* Pie de página */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; 2024 Al Corte Barber. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Home;
