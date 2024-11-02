Tarea: Sistema de Gestión de Tareas 📝
Objetivo

Crear una aplicación de gestión de tareas simples en React que permita al usuario agregar, listar y eliminar tareas. La aplicación estará dividida en varios componentes, y cada acción deberá manejarse utilizando useState para administrar el estado y pasar datos o manejadores entre componentes.

Requisitos

 * Componente Principal (App.js):

Este componente será el encargado de gestionar el estado de las tareas.

Almacena en el estado una lista de tareas. Cada tarea debe incluir un id único y un texto que describe la tarea.

* Componente de Entrada de Tareas (AgregarTarea.js):

Este componente debe tener un campo de texto controlado que permita ingresar el nombre de la tarea.

Al presionar el botón "Agregar Tarea", la tarea debe agregarse a la lista de tareas en el componente principal.

Después de agregar la tarea, el campo de texto debe limpiarse.

* Componente de Lista de Tareas (ListaTareas.js):

Este componente recibe la lista de tareas como prop desde el componente principal.

Renderiza cada tarea en un li, junto con un botón "Eliminar" para borrar la tarea correspondiente.

* Componente de Tarea Individual (Tarea.js):

Este componente representa una tarea única.

Debe mostrar el texto de la tarea y un botón "Eliminar".

Al hacer clic en "Eliminar", se debe llamar a una función que elimine la tarea del estado en el componente principal.

Funcionalidad Extra (Opcional)

Permitir al usuario marcar una tarea como "completada". Las tareas completadas se deberían mostrar con un estilo diferente (por ejemplo, tachado).

Agregar un contador que muestre la cantidad total de tareas y cuántas de ellas están completadas.