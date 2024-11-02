import Tarea from "./Tarea"

export default function ListaTareas({listaTarea}) {

  return (
    <div className="div-listas">
      <ul className="ul-tareas">
          {listaTarea.map((tarea,index) =>
            <Tarea li={tarea} key={index}/>
          )}
      </ul>
    </div>
  )
}
 

