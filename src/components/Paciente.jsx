import React from 'react'

const Paciente = () => {
  return (
    <div className="m-3 mt-0 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre:{""}
          <span className="font-normal normal-case ml-1"> Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{""}
          <span className="font-normal normal-case ml-1"> Danny</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case ml-1">
            example@example.com
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha alta:{""}
          <span className="font-normal normal-case ml-1">
            10 de diciembre del 2022
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas:{""}
          <span className="font-normal normal-case ml-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint
            eaque sit eius itaque minima ipsam perferendis consequatur magni ex
            magnam voluptatum voluptatibus deleniti, asperiores, voluptas non
            ratione explicabo doloribus!
          </span>
        </p>
      </div>
  )
}

export default Paciente