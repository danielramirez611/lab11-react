// src/TareaForm.js (Modificado)
import React, { useState } from 'react';
import './styles.css'; // Importa el archivo de estilos CSS

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      setError("Por favor ingresa una tarea válida.");
      return;
    }
    if (texto.length > 50) {
      setError("La tarea es demasiado larga. Por favor, limita la tarea a 50 caracteres.");
      return;
    }
    agregarTarea(texto);
    setTexto("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añadir tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TareaForm;
