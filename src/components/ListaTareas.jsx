import Tarea from "./Tarea"

export default function ListaTareas({listaTarea, btnEliminar, marcada, completarTarea}) {
// console.log(listaTarea);

  return (
    <div className="div-listas">
      <ul className="ul-tareas">
          {listaTarea.map((tarea, index) =>
            <Tarea 
              li={tarea} 
              key={index} 
              valor={index} 
              btnEliminar={btnEliminar}
              marcada={tarea.estado}
              completarTarea={completarTarea}
            />
          )}
      </ul>
    </div>
  )
}
 

