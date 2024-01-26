import { useState, useEffect } from "react";
import { Error } from "./Error";

const generarId=()=>{
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return random+fecha;
}

const Formulario = ({ pacientes, setPacientes }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validaFormulario(formulario)) {
      setError(true);
      return;
    }
    setPacientes([...pacientes, {...formulario,id:generarId()}]);
    setFormulario({
      nombre: "",
      propietario: "",
      email: "",
      alta: "",
      sintomas: "",
    });
    setError(false);
  };

  const validaFormulario = (formulario) => {
    return Object.values(formulario).some((valor) => valor.trim() === "");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        autoComplete="off"
        className="bg-white shadow-md rounded-xl py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje={'Todos los campos son obligatorios.'} setError={setError} />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={formulario.nombre}
            onChange={(event) => {
              setFormulario({
                ...formulario,
                nombre: event.target.value,
              });
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre Propietario"
            value={formulario.propietario}
            onChange={(event) => {
              setFormulario({
                ...formulario,
                propietario: event.target.value,
              });
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email de contacto"
            value={formulario.email}
            onChange={(event) => {
              setFormulario({
                ...formulario,
                email: event.target.value,
              });
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta médica
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={formulario.alta}
            onChange={(event) => {
              setFormulario({
                ...formulario,
                alta: event.target.value,
              });
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={formulario.sintomas}
            onChange={(event) => {
              setFormulario({
                ...formulario,
                sintomas: event.target.value,
              });
            }}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all rounded shadow-md"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
