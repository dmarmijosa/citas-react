import React from "react";

export const Error = ({mensaje,setError}) => {
  setTimeout(() => {
    setError(false);
  }, 3500);
  return (
    <div>
      <p className="bg-red-300 rounded-sm p-2 mb-4 hover:bg-red-600 hover:text-white transition-all shadow-md">
        {mensaje}
      </p>
    </div>
  );
};
