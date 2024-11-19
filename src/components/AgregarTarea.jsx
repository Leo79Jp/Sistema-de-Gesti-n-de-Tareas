import React, { useState } from 'react'

export default function AgregarTarea({addTarea}) {
  const [nuevaTarea, setNuevaTarea] = useState('')

  const handleChange = (event) => {
    setNuevaTarea(event.target.value)
  }
  const agregarTarea = () => {
    setNuevaTarea('')
    addTarea({nuevaTarea})
  }
  

  return (
    <div className="div-agregar">
      <h2>Agregar Tarea</h2>
      <div className="div-agregar-row">
        <input
          className="input-tareas"
          type="text"
          id="idTarea"
          name="idTarea"
          placeholder="Ingresar Nombre de la Tarea"
          value={nuevaTarea}
          onChange={handleChange}
        />
        <button type="button" className="btn-agregar" onClick={agregarTarea}>
          Agregar
        </button>
      </div>

      </div>

  )
}


      

