import { useState } from 'react'
import './App.css'
import ListaTareas from './components/ListaTareas'
import AgregarTarea from './components/AgregarTarea'


function App() {
  const [tareas, setTareas] = useState(['Ir al Super','Cargar Nafta','Comprar Regalos'])

  return (
    <main className='main-tareas'>
      <h1>Lista de Tareas</h1>
    <AgregarTarea  listaTarea={tareas} />
    <ListaTareas listaTarea={tareas}/>
    </main>
  )
}
export default App

