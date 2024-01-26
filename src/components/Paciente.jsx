import React from "react";

const Paciente = ({ paciente }) => {
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
          {paciente.alta
            ? cambiarFechaFormato(paciente.alta)
            : ""}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{""}
        <span className="font-normal normal-case ml-1">
          {paciente.sintomas}
        </span>
      </p>
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
