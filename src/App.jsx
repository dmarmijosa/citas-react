import "./App.css";
import Formulario from "./components/Formulario.jsx";
import Header from "./components/Header.jsx";
import ListadoPaciente from "./components/ListadoPaciente.jsx";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12  md:flex">
        <Formulario />
        <ListadoPaciente />
      </div>
    </div>
  );
}

export default App;
