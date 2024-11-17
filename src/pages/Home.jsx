import React, { useState } from "react";
import Img1 from "@/assets/imgs/img-1.jpeg";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const toggleSchedule = () => setIsOpen(!isOpen);
  const toggleServices = () => setShowAllServices(!showAllServices);

  const popularServices = [
    "Corte Clásico",
    "Arreglo de Barba",
    "Corte Moderno",
    "Estilismo Personalizado",
  ];

  const allServices = [
    "Corte Clásico",
    "Arreglo de Barba",
    "Corte Moderno",
    "Estilismo Personalizado",
    "Corte Infantil",
    "Corte a Navaja",
    "Tinte de Cabello",
    "Tratamiento Capilar",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Sección Superior */}
      <header className="flex flex-col md:flex-row w-full items-start justify-between p-8 md:py-20 max-w-screen-xl mx-auto">
        {/* Parte Izquierda - Imagen */}
        <div className="w-full md:w-2/3 flex flex-col justify-start items-start space-y-6">
          <img
            src={Img1}
            alt="Descripción de la imagen"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          {/* Contenedor debajo de la imagen */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center md:text-left">
            <h2 className="text-3xl font-semibold">Bienvenidos a Al Corte Barber</h2>
            <p>Avenida Lope de Figueroa, 1, 28804, Alcalá de Henares</p>
            <p className="text-gray-600 mb-6 mt-2">
              En Al Corte Barber, nos enorgullece ofrecer servicios de barbería de primera calidad
              con un toque único y moderno. Nuestro objetivo es que cada cliente se sienta especial
              al salir con un estilo renovado.
            </p>

            {/* Sección de Servicios Populares */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">Servicios Populares</h3>
              <ul className="list-none space-y-2">
                {popularServices.map((service, index) => (
                  <li key={index} className="text-gray-700 text-lg">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtítulo de Cortes */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">Cortes</h3>
              <button
                onClick={toggleServices}
                className="text-blue-600 font-semibold flex items-center"
              >
                {showAllServices ? "Ver menos" : "Ver todos los servicios"}
                <svg
                  className={`ml-2 w-4 h-4 transform ${showAllServices ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showAllServices && (
                <div className="mt-4">
                  <ul className="list-disc pl-6 text-gray-700">
                    {allServices.map((service, index) => (
                      <li key={index} className="mb-2">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Parte Derecha - Card Quienes Somos */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 px-4 flex flex-col justify-start">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Quienes Somos</h2>
            <p className="text-gray-600 mb-6">
              Somos un salón de barberos especializado en cortes de calidad, brindando un servicio
              único para cada cliente. Nuestro equipo está formado por expertos que te ayudarán a
              encontrar el estilo que mejor se adapte a ti.
            </p>

            {/* Sección de Barberos */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Nuestro Equipo de Barberos</h3>
              <ul className="list-disc pl-6 text-left">
                <li>
                  <strong>Juan Pérez</strong> - Especialista en cortes modernos.
                </li>
                <li>
                  <strong>Laura García</strong> - Experta en estilos clásicos y barba.
                </li>
                <li>
                  <strong>Carlos Sánchez</strong> - Técnico en cortes de precisión.
                </li>
                <li>
                  <strong>María López</strong> - Profesional en cortes de niños y caballeros.
                </li>
              </ul>
            </div>

            {/* Sección de Horario de Apertura */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Horario de Apertura</h3>
              <p className="text-lg text-gray-600">Hoy: 10:00 - 20:00</p>
              <button
                className="mt-2 text-blue-600 hover:text-blue-800 flex items-center justify-center md:justify-start"
                onClick={toggleSchedule}
              >
                Mostrar semana completa
                <svg
                  className={`ml-2 w-4 h-4 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="mt-4 text-gray-600">
                  <p>Lunes: 10:00 - 20:00</p>
                  <p>Martes: 10:00 - 20:00</p>
                  <p>Miércoles: 10:00 - 20:00</p>
                  <p>Jueves: 10:00 - 20:00</p>
                  <p>Viernes: 10:00 - 20:00</p>
                  <p>Sábado: 10:00 - 18:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p>&copy; 2024 Al Corte Barber. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
