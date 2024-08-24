/* eslint-disable no-unused-vars */
import React from "react";
import Service from "../components/Service";
import Navbar from "../components/Navbar";
import "./Home.css";
import Map from "../components/Map";
//IMAGENES
//iconos
import Imgprofile from "@/assets/icons/account.svg";
import Imgmap from "@/assets/icons/map.svg";
import Imgprincipal from "@/assets/img-3.jpeg";
import Imginstagram from "@/assets/icons/insta.svg";
import Imgwhatsapp from "@/assets/icons/what.svg";
import Imgcall from "@/assets/icons/call.svg";
//cortes
import Imgcorte1 from "@/assets/cortes/1.jpeg";
import Imgcorte2 from "@/assets/cortes/2.jpeg";
import Imgcorte3 from "@/assets/cortes/3.jpeg";
import Imgcorte4 from "@/assets/cortes/4.jpeg";
import Imgcorte5 from "@/assets/cortes/5.jpeg";

// Lista de servicios
const horarios = [
  {
    name: "horario",
    lunes: "Cerrado",
    martes: "10:30 - 13:30",
    miercoles: "10:30 - 13:30",
    jueves: "10:30 - 13:30",
    viernes: "10:30 - 13:30",
    sabado: "10:30 - 13:30",
    domingo: "Cerrado",
    description: "A stylish haircut to give you a fresh look.",
    state: true,
    redesSociales: {
      instagram: "your_instagram_handle",
      facebook: "your_facebook_handle",
      correo: "your_email@example.com",
    },
    phoneNumber: "545230123",
  },
];

const Home = () => {
  return (
    <div className="bg-[#FFFFFF] text-black min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Sección principal */}
      <div className="container mx-auto px-4 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div className="flex items-center justify-center">
            <img
              src={Imgprincipal}
              alt="Alcorte Barberia"
              className="object-cover w-3/4 h-3/4 md:w-5/6 lg:w-full md:h-5/6 lg:h-/6 rounded-lg mt-[70px] sm:mt-0 md:mt-0 lg:mt-0"
            />
          </div>
          <div className="flex items-center justify-center sm:items-start md:items-center lg:items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                ALCORTEBARBER
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-sans mb-4 text-black">
                Descubre nuestra amplia gama de servicios de peluquería,
                incluyendo cortes de pelo, arreglos de barba y asesoramiento
                personalizado. Visítanos y déjanos cuidar de tu estilo.
              </p>
              <button className="bg-black text-white py-2 px-4 rounded btn-effect font-semibold border-2 border-black">
                RESERVA TU CITA
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de servicios */}
      <div className="text-black py-10 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-5 gap-8">
          <div className="col-span-3">
            <div className="p-6 rounded-lg shadow-2xl bg-white h-[800px] mb-8">
              <h1 className="text-4xl font-bold mb-4">
                DESCUBRE NUESTROS SERVICIOS
              </h1>
              <div className="mb-4 flex items-center">
                <p className="text-lg font-sans mb-0">
                  Avenida Lope de Figueroa, 1, 28804, Alcalá de Henares
                </p>
                <span>
                  <a href="https://www.google.com/maps/dir//alcortebarber/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd42490f6f900849:0x64e26d5bf5fe2002?sa=X&ved=1t:3061&ictx=111">
                    <img src={Imgmap} className="mr-2" alt="mapa" />
                  </a>
                </span>
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                Explora nuestras opciones
              </h2>
              <div className="h-[600px] overflow-y-auto custom-scrollbar">
                <Service />
              </div>
            </div>

            
            <div className="col-span-3 flex flex-col p-4 bg-white rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold pb-5 text-start">
                DESCUBRE NUESTROS CORTES
              </h1>
              <p className="text-lg font-sans mb-4 text-black">
                Descubre nuestra amplia gama de servicios de peluquería,
                incluyendo cortes de pelo, arreglos de barba y asesoramiento
                personalizado. Visítanos y déjanos cuidar de tu estilo.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center items-center col-span-1">
                  <img
                    src={Imgcorte1}
                    alt=""
                    className="h-auto w-full object-cover rounded"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src={Imgcorte2}
                    alt=""
                    className="h-auto w-full object-cover rounded"
                  />
                  <img
                    src={Imgcorte3}
                    alt=""
                    className="h-auto w-full object-cover rounded"
                  />
                  <img
                    src={Imgcorte4}
                    alt=""
                    className="h-auto w-full object-cover rounded"
                  />
                  <img
                    src={Imgcorte5}
                    alt=""
                    className="h-auto w-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="sticky top-4 p-6 rounded-lg shadow-2xl bg-white">
              <h2 className="text-3xl font-semibold mb-4">Empleados</h2>
              <div className="block font-sans">
                <div className="flex items-center justify-start mb-2">
                  <img src={Imgprofile} alt="profile image" className="mr-2" />
                  <p className="text-lg">Armando Uceda</p>
                </div>
                <div className="flex items-center justify-start mb-2">
                  <img src={Imgprofile} alt="profile image" className="mr-2" />
                  <p className="text-lg ">Cristian</p>
                </div>
              </div>
              <div className="block">
                <h2 className="text-3xl font-semibold mb-2">
                  Horario de apertura
                </h2>
                {horarios.map((horario, index) => (
                  <div key={index} className="mb-2 font-sans">
                    <p className="text-lg">Lunes: {horario.lunes}</p>
                    <p className="text-lg">Martes: {horario.martes}</p>
                    <p className="text-lg">Miércoles: {horario.miercoles}</p>
                    <p className="text-lg">Jueves: {horario.jueves}</p>
                    <p className="text-lg">Viernes: {horario.viernes}</p>
                    <p className="text-lg">Sábado: {horario.sabado}</p>
                    <p className="text-lg">Domingo: {horario.domingo}</p>
                  </div>
                ))}
              </div>
              <div className="block">
                <h2 className="text-3xl font-semibold mb-2">
                  Contacta con nosotros
                </h2>
                {horarios.map((horario, index) => (
                  <div key={index} className="mb-2 flex items-center">
                    <button className="ms-2 py-1 px-3 bg-[#08A0E9] shadow-lg text-black font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 h-[60px] w-[60px]">
                      <span className="flex items-center justify-center">
                        <img src={Imgcall} alt="Alcortebarber" />
                      </span>
                    </button>
                    <button className="ms-2 py-1 px-3 bg-[#7AD06D] shadow-lg text-black font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 h-[60px] w-[60px]">
                      <span className="flex items-center justify-center">
                        <img src={Imgwhatsapp} alt="WhatsApp Alcortebarber" />
                      </span>
                    </button>
                    <button className="ms-2 py-1 px-3 bg-[#FBC031] shadow-lg text-black font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 h-[60px] w-[60px]">
                      <span className="flex items-center justify-center">
                        <img src={Imginstagram} alt="Instagram Alcortebarber" />
                      </span>
                    </button>
                  </div>
                ))}
              </div>
              {/* <div className="block">
                <h2 className="text-3xl font-semibold mb-2">Redes Sociales</h2>
                {horarios.map((horario, index) => (
                  <div key={index} className="mb-2 flex items-center">
                    <span>
                      <img src="src/assets/iphone.svg" alt="" />
                    </span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo y Descripción */}
            <div>
              <h2 className="text-2xl font-bold mb-2">ALCORTE BABER</h2>
              <p className="text-gray-400 font-sans">
                Somos una peluquería especializada en el cuidado del hombre.
                Nuestra misión es que te veas y te sientas genial cada vez que
                nos visitas.
              </p>
            </div>
            {/* Enlaces Rápidos */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Enlaces Rápidos</h3>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a href="#services" className="hover:underline font-sans">
                    Servicios
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="hover:underline font-sans">
                    Sobre Nosotros
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#contact" className="hover:underline font-sans">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            {/* Información de Contacto */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Contacto</h3>
              <p className="text-gray-400 font-sans">
                Email: contacto@pulseproject.com
              </p>
              <p className="text-gray-400 font-sans">
                Teléfono: +34 123 456 789
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#facebook"
                  className="text-gray-400 hover:text-white"
                ></a>
                <a href="#twitter" className="text-gray-400 hover:text-white">
                  {/* <img src "src/assets/twitter.svg" alt="Twitter" className="w-6 h-6" /> */}
                </a>
                <a
                  href="#instagram"
                  className="text-gray-400 hover:text-white"
                ></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 font-serif">
            &copy; {new Date().getFullYear()} Pulse Project. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

