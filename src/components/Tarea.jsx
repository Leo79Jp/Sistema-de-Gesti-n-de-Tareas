

export default function Tarea({li, valor, btnEliminar, marcada, completarTarea}) {

  
  const eliminarTarea = (itemEliminar) =>{
      btnEliminar(itemEliminar)
  }

  return (
    <div className={marcada ? 'div-tareas tachada' : 'div-tareas noTachada'}>
      <li className= 'li-tareas'
      key={valor}
      onClick={() => completarTarea(li)}>
          {li.nombre}
      </li>
      <button className="btn-eliminar"  onClick={()=>eliminarTarea(li)}>x</button>
    </div>
  )
}
