import React, { useState } from 'react';

const TeamCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const barbers = [
    { img: '/path-to-image/img1.jpg', name: 'Barbero 1' },
    { img: '/path-to-image/img2.jpg', name: 'Barbero 2' },
    { img: '/path-to-image/img3.jpg', name: 'Barbero 3' },
    { img: '/path-to-image/img4.jpg', name: 'Barbero 4' },
    { img: '/path-to-image/img5.jpg', name: 'Barbero 5' },
  ];

  const handleCarouselChange = (direction) => {
    setCarouselIndex((prevIndex) => {
      // Calculamos el nuevo índice basado en la dirección
      const newIndex = prevIndex + direction;

      // Evitamos que el índice se desplace más allá de los límites
      if (newIndex < 0) return 0; // Si se va a un valor negativo, lo fijamos en 0
      if (newIndex >= barbers.length - 2) return barbers.length - 3; // Si llega al final, se queda en el último bloque visible

      return newIndex;
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${carouselIndex * (100 / 3)}%)`, // Ajustamos el desplazamiento por 33.33%
          width: `${barbers.length * (100 / 3)}%`, // Ajustamos el ancho total
        }}
      >
        {barbers.map((barber, index) => (
          <div key={index} className="w-full md:w-1/3 px-2 flex flex-col items-center">
            {/* Imagen del barbero, si no hay imagen muestra el icono por defecto */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center">
              {barber.img ? (
                <img
                  src={barber.img}
                  alt={barber.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 017 7v3a7 7 0 01-14 0V10a7 7 0 017-7zm0 2a5 5 0 00-5 5v3a5 5 0 0010 0V10a5 5 0 00-5-5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="text-center mt-2">{barber.name}</p>
          </div>
        ))}
      </div>

      {/* Botón izquierdo de navegación */}
      <button
        onClick={() => handleCarouselChange(-1)}
        className="absolute -left-3 top-1/2 transform -translate-y-1/2 text-gray-600 p-2 rounded-full"
        style={{ fontSize: '1.5rem' }} // Ajustamos el tamaño de la flecha
      >
        &#60;
      </button>

      {/* Botón derecho de navegación */}
      <button
        onClick={() => handleCarouselChange(1)}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-gray-600 p-2 rounded-full"
        style={{ fontSize: '1.5rem' }} // Ajustamos el tamaño de la flecha
      >
        &#62;
      </button>
    </div>
  );
};

export default TeamCarousel;
