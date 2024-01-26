import React, { useEffect } from "react";

const Paciente = ({ paciente, setPaciente }) => {
  useEffect(()=>{
    console.log('Componete paciente esta listo');
  },[])
  return (
    <div className="m-3 mt-0 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:{""}
        <span className="font-normal normal-case ml-1"> {paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{""}
        <span className="font-normal normal-case ml-1">
          {" "}
          {paciente.propietario}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case ml-1">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta:{""}
        <span className="font-normal normal-case ml-1">
          {paciente.alta ? cambiarFechaFormato(paciente.alta) : ""}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{""}
        <span className="font-normal normal-case ml-1">
          {paciente.sintomas}
        </span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-bold rounded shadow-xl uppercase"
          type="button"
          onClick={()=>{setPaciente(paciente)}}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 transition-all text-white font-bold rounded shadow-xl uppercase"
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

const cambiarFechaFormato = (fecha) => {
  const partes = fecha.split("-");
  const anio = partes[0];
  const mes = partes[1];
  const dia = partes[2];
  const nombresDeMeses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const nombreDelMes = nombresDeMeses[parseInt(mes) - 1];
  return `${dia} de ${nombreDelMes} del ${anio}`;
};

export default Paciente;
