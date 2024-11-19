import { useState } from 'react'
import './App.css'
import ListaTareas from './components/ListaTareas'
import AgregarTarea from './components/AgregarTarea'
// import Tarea from './components/Tarea'


function App() {
  const [tareas, setTareas] = useState([{nombre: 'Ir al Super', estado: false}, {nombre: 'Cargar Nafta', estado: false}, {nombre:'Comprar Regalos', estado: true}])
  
  const addTarea = ({nuevaTarea}) => {
    setTareas([...tareas, {nombre: nuevaTarea, estado: false}]);
  };
  const btnEliminar = (item)  =>{
    const resultado = tareas.filter(i => i != item);
    setTareas(resultado);
  }
  const completarTarea = (est) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea === est) {
        tarea.estado = !tarea.estado;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <main className='main-tareas'>
      <h1>Lista de Tareas</h1>
    <AgregarTarea  addTarea={addTarea} />
    <ListaTareas listaTarea={tareas} btnEliminar={btnEliminar} completarTarea={completarTarea}/>
    {/* <Tarea eliminarT={eliminarT} /> */}
    </main>
  )
}
export default App

