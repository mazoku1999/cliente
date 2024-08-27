import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [cargo, setCargo] = useState("");
  const [antiguedad, setAntiguedad] = useState(0);
  const [ci, setCi] = useState("");

  const registrar = () => {
    Axios.post('http://localhost:3001/create', {
      nombre: nombre,
      edad: edad,
      cargo: cargo,
      antiguedad: antiguedad,
      ci: ci
    }).then(() => {
      alert('Empleado registrado');
    });
  }

  return (
    <div className="App">
      <div className='formulario'>
        <label>
          Nombre:
          <input type='text' onChange={(event) => { setNombre(event.target.value) }}></input>
        </label>
        <label>
          Edad:
          <input type='number' onChange={(event) => { setEdad(event.target.value) }}></input>
        </label>
        <label>
          Cargo:
          <input type='text' onChange={(event) => { setCargo(event.target.value) }}></input>
        </label>
        <label>
          Antiguedad:
          <input type='number' onChange={(event) => { setAntiguedad(event.target.value) }}></input>
        </label>
        <label>
          Ci:
          <input type='text' onChange={(event) => { setCi(event.target.value) }}></input>
        </label>
        <button onClick={registrar}>Registrar</button>
      </div>
    </div>
  );
}

export default App;