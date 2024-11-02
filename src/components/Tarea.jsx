

export default function Tarea({li}) {
  
  return (
    <li className="li-tareas" >
        {li}
        <button className="btn-eliminar">x</button>
    </li>
  )
}


