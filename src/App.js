// src/App.js

import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");

  const agregarTarea = (texto) => {
    const nuevaTarea = { texto, completada: false, fecha: new Date() };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarAscendente = () => {
    const nuevasTareas = [...tareas];
    nuevasTareas.sort((a, b) => a.fecha - b.fecha);
    setTareas(nuevasTareas);
  };

  const ordenarDescendente = () => {
    const nuevasTareas = [...tareas];
    nuevasTareas.sort((a, b) => b.fecha - a.fecha);
    setTareas(nuevasTareas);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TareaForm agregarTarea={agregarTarea} />
      <Filtros
        filtrarTareas={filtrarTareas}
        ordenarAscendente={ordenarAscendente}
        ordenarDescendente={ordenarDescendente}
      />
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );
}

export default App;
