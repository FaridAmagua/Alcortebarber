const services = [
  {
    name: "Corte normal",
    description: "",
    price: 15.5,
  },
  {
    name: "Corte normal y barba",
    description: "",
    price: 20.0,
  },
  {
    name: "Fade",
    description:
      "Incluye fade o taperfade sin tocar la estructura para gente que quiere conservar o dejar crecer longitud.",
    price: 10.0,
  },
  {
    name: "Corte infantil",
    description: "",
    price: 15.5,
  },
  {
    name: "Corte jubilado",
    description: "",
    price: 15.5,
  },
  {
    name: "Corte bebé",
    description: "",
    price: 15.5,
  },
  {
    name: "Corte universitario",
    description: "",
    price: 15.5,
  },
  {
    name: "Corte pelo largo",
    description: "",
    price: 15.5,
  },
  {
    name: "Barba corta",
    description: "",
    price: 15.5,
  },
  {
    name: "Barba media",
    description: "",
    price: 15.5,
  },
  {
    name: "Barba larga",
    description: "",
    price: 15.5,
  },
  {
    name: "Ritual de afeitado",
    description: "",
    price: 15.5,
  },
  {
    name: "OCTYL anti caida",
    description: "",
    price: 15.5,
  },
  {
    name: "OCTYL anti grasa/caspa",
    description: "",
    price: 15.5,
  },
  {
    name: "OCTYL anti revitamazing",
    description: "",
    price: 15.5,
  },
  {
    name: "Color completo",
    description:
      "Proceso por el cual decoloramos hasta llegar al blanco o ceniza. Si se añade algún matiz de color  fantasía lleva un sobrecoste de 5€. Incluye corte de pelo. Recomendamos no lavar el pelo 24h antes de la cita. Cualquier duda pónganse en contacto con nosotros",
    price: 15.5,
  },
  {
    name: "Mecha peine",
      description: "",
    price: 15.5,
  },
  {
    name: "Mecha de plata",
    description: "",
    price: 15.5,
  },
  {
    name: "Mecha de gorro",
    description: "",
    price: 15.5,
  },
  {
    name: "permanente",
    description: "",
    price: 50,
    time:"3h",
  },
];

export const Service = () => {
  return (
    <div>
      <ul className="list-none p-0">
        {services.map((service, index) => (
          <li key={index} className="mb-4 border-b border-gray-300 pb-4">
            <h3 className="text-lg font-sans font-bold">{service.name}</h3>
            <p className="text-lg font-sans">{service.description}</p>
            <p className="text-lg font-sans">Price: ${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
