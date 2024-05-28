// src/Filtros.js

import React from 'react';

function Filtros({ filtrarTareas, ordenarAscendente, ordenarDescendente }) {
  return (
    <div>
      <button onClick={() => filtrarTareas("Todas")}>Todas</button>
      <button onClick={() => filtrarTareas("Pendientes")}>Pendientes</button>
      <button onClick={() => filtrarTareas("Completadas")}>Completadas</button>
      <button onClick={ordenarAscendente}>Ascendente</button> {/* Botón para ordenar ascendente */}
      <button onClick={ordenarDescendente}>Descendente</button> {/* Botón para ordenar descendente */}
    </div>
  );
}

export default Filtros;
