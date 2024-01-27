import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario.jsx";
import Header from "./components/Header.jsx";
import ListadoPaciente from "./components/ListadoPaciente.jsx";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente]=useState({})
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12  md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />
        <ListadoPaciente pacientes={pacientes} setPaciente={setPaciente}/>
      </div>
    </div>
  );
}

export default App;
