import React from 'react';
import './App.css'; // Importamos el archivo de estilos

function App() {
  // Aquí declaramos los datos (Fuera del return, dentro de la función)
  const sprintPlanning = {
    id: "SPRINT-01",
    nombre: "Sprint 1: Fundamentos de Compra",
    objetivo: "Permitir al usuario explorar productos, usar filtros y agregar al carrito.",
    fechaInicio: "2026-10-12",
    fechaFin: "2026-10-26",
    estado: "En Progreso",
    historias: [
      {
        idHistoria: "HU-001",
        alias: "Catálogo y Detalles",
        puntosHistoria: 5,
        tareas: [
          { idTarea: "T-101", titulo: "Diseñar esquema de base de datos para Productos", estado: "Terminado", asignadoA: "Ana", horas: 4 },
          { idTarea: "T-102", titulo: "Crear endpoint GET /api/productos", estado: "En Revisión", asignadoA: "Ana", horas: 6 },
          { idTarea: "T-103", titulo: "Maquetar componente visual <ProductGrid />", estado: "En Progreso", asignadoA: "Carlos", horas: 8 }
        ]
      },
      {
        idHistoria: "HU-003",
        alias: "Carrito de Compras",
        puntosHistoria: 3,
        tareas: [
          { idTarea: "T-301", titulo: "Configurar gestor de estado para carrito", estado: "Por Hacer", asignadoA: "Luis", horas: 5 },
          { idTarea: "T-302", titulo: "Crear lógica para calcular subtotal", estado: "Por Hacer", asignadoA: "Luis", horas: 3 }
        ]
      }
    ]
  };

  // Función auxiliar para convertir el estado en una clase CSS válida
  const formatoClaseEstado = (estado) => estado.toLowerCase().replace(/ /g, '-').replace(/ó/g, 'o');

  // Aquí devolvemos la interfaz visual (JSX)
  return (
    <div className="app-container">
      {/* Cabecera del Sprint */}
      <header className="sprint-header">
        <h1>{sprintPlanning.nombre}</h1>
        <p className="sprint-goal">🎯 Objetivo: {sprintPlanning.objetivo}</p>
        <div className="sprint-meta">
          <span>📅 {sprintPlanning.fechaInicio} - {sprintPlanning.fechaFin}</span>
          <span className="badge en-progreso">{sprintPlanning.estado}</span>
        </div>
      </header>

      {/* Lista de Historias y Tareas */}
      <main className="historias-container">
        {sprintPlanning.historias.map((historia) => (
          <section key={historia.idHistoria} className="historia-card">
            <div className="historia-header">
              <h2>{historia.idHistoria}: {historia.alias}</h2>
              <span className="puntos-badge">⭐ {historia.puntosHistoria} pts</span>
            </div>
            
            <div className="tareas-grid">
              {historia.tareas.map((tarea) => (
                <div key={tarea.idTarea} className="tarea-card">
                  <h3>{tarea.titulo}</h3>
                  <div className="tarea-footer">
                    <span className="asignado">👤 {tarea.asignadoA}</span>
                    <span className="horas">⏱️ {tarea.horas}h</span>
                  </div>
                  {/* Aplicamos color dinámico según el estado */}
                  <span className={`estado-tarea status-${formatoClaseEstado(tarea.estado)}`}>
                    {tarea.estado}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;