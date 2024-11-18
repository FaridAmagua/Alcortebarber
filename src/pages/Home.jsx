import React, { useState } from "react";
import Img1 from "@/assets/imgs/img-1.jpeg";
import TeamCarousel from "../components/TeamCarousel"

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleSchedule = () => setIsOpen(!isOpen);

  const popularServices = [
    "Corte Clásico",
    "Arreglo de Barba",
    "Corte Moderno",
    "Estilismo Personalizado",
    "Tinte de Cabello",
  ];

  const servicesByCategory = {
    Cortes: [
      "Corte Clásico",
      "Corte Moderno",
      "Corte Infantil",
      "Corte a Navaja",
    ],
    Tratamientos: ["Tinte de Cabello", "Tratamiento Capilar"],
    Barba: ["Arreglo de Barba", "Estilismo Personalizado"],
  };

  const handleToggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderButton = (service) => {
    const isSelected = selectedServices.includes(service);
    return (
      <button
        onClick={() => handleToggleService(service)}
        className={`${
          isSelected ? "text-red-600 hover:text-red-800" : "text-blue-600"
        } hover:scale-110 transition-transform`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          {isSelected ? (
            <path
              fillRule="evenodd"
              d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
    );
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Sección Superior */}
      <header className="flex flex-col md:flex-row w-full items-start justify-between p-8 md:py-20 max-w-screen-xl mx-auto">
        {/* Parte Izquierda */}
        <div className="w-full md:w-2/3 flex flex-col justify-start items-start space-y-6">
          <img
            src={Img1}
            alt="Descripción de la imagen"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center md:text-left">
            <h2 className="text-3xl font-semibold">Bienvenidos a Al Corte Barber</h2>
            <p>Avenida Lope de Figueroa, 1, 28804, Alcalá de Henares</p>
            <p className="text-gray-600 mb-6 mt-2">
              En Al Corte Barber, nos enorgullece ofrecer servicios de barbería
              de primera calidad con un toque único y moderno.
            </p>

            {/* Servicios Populares */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">Servicios Populares</h3>
              <ul className="list-none space-y-2">
                {popularServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-700 text-lg"
                  >
                    {service}
                    {renderButton(service)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Categorías */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Categorías</h3>
              {Object.entries(servicesByCategory).map(([category, services]) => (
                <div key={category} className="mb-6">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleCategory(category)}
                  >
                    <h4 className="text-xl font-semibold mb-2">{category}</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5 transform ${
                        expandedCategories[category] ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {expandedCategories[category] && (
                    <ul className="list-none space-y-2 pl-4">
                      {services.map((service, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center text-gray-700 text-lg"
                        >
                          {service}
                          {renderButton(service)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parte Derecha */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 px-4 flex flex-col justify-start">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Quienes Somos</h2>
            <p className="text-gray-600 mb-6">
              Somos un salón de barberos especializado en cortes de calidad,
              brindando un servicio único para cada cliente. Nuestro equipo está
              formado por expertos que te ayudarán a encontrar el estilo que
              mejor se adapte a ti.
            </p>

            {/* Barberos */}
           <div>
            <TeamCarousel></TeamCarousel>
           </div>
            
            {/* Horario */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Horario</h3>
              <p className="text-lg text-gray-600">Hoy: 10:00 - 20:00</p>
              <button
                className="mt-2 text-blue-600 hover:text-blue-800"
                onClick={toggleSchedule}
              >
                {isOpen ? "Ocultar horario" : "Mostrar horario"}
              </button>
              {isOpen && (
                <div className="mt-4 text-gray-600">
                  <p>Lunes: 10:00 - 20:00</p>
                  <p>Martes: 10:00 - 20:00</p>
                  <p>Miércoles: 10:00 - 20:00</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p>&copy; 2024 Al Corte Barber. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
