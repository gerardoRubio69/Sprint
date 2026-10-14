import React from 'react';
import './App.css';

function App() {
  // Datos actualizados: Reflejando el final del sprint y los imprevistos
  const sprintPlanning = {
    id: "SPRINT-01",
    nombre: "Sprint 1: Fundamentos de Compra",
    objetivo: "Permitir al usuario explorar productos, usar filtros y agregar al carrito.",
    fechaInicio: "2026-10-12",
    fechaFin: "2026-10-26",
    estado: "En Revisión Final",
    historias: [
      {
        idHistoria: "HU-001",
        alias: "Catálogo y Detalles",
        puntosHistoria: 5,
        tareas: [
          { idTarea: "T-101", titulo: "Diseñar esquema de BD para Productos", estado: "Terminado", asignadoA: "Ana", horas: 4 },
          { idTarea: "T-102", titulo: "Crear endpoint GET /api/productos", estado: "Terminado", asignadoA: "Ana", horas: 6 },
          { idTarea: "T-103", titulo: "Maquetar UI (Lista vertical en lugar de carrusel)", estado: "Terminado", asignadoA: "Carlos", horas: 6 },
          { idTarea: "T-104", titulo: "[EMERGENCIA] Crear Mocks JSON por caída de servidor", estado: "Terminado", asignadoA: "Carlos", horas: 2 }
        ]
      },
      {
        idHistoria: "HU-002",
        alias: "Búsqueda y Filtros",
        puntosHistoria: 5,
        tareas: [
          { idTarea: "T-201", titulo: "Endpoint con parámetros de búsqueda", estado: "Terminado", asignadoA: "Ana", horas: 5 },
          { idTarea: "T-202", titulo: "Componente de barra de búsqueda", estado: "Terminado", asignadoA: "Carlos", horas: 4 },
          { idTarea: "T-203", titulo: "Arreglar bug de limpieza de filtro de tallas", estado: "Terminado", asignadoA: "Luis", horas: 3 }
        ]
      },
      {
        idHistoria: "HU-003",
        alias: "Carrito de Compras",
        puntosHistoria: 3,
        tareas: [
          { idTarea: "T-301", titulo: "Configurar gestor de estado para carrito", estado: "Terminado", asignadoA: "Luis", horas: 5 },
          { idTarea: "T-302", titulo: "Lógica para calcular subtotal", estado: "Terminado", asignadoA: "Luis", horas: 3 },
          { idTarea: "T-303", titulo: "[NUEVO] Añadir desglose de IVA (16%) al total", estado: "En Progreso", asignadoA: "Luis", horas: 2 }
        ]
      }
    ]
  };

  // Lógica avanzada: Calcular progreso del Sprint automáticamente
  const calcularProgreso = () => {
    let totalTareas = 0;
    let tareasTerminadas = 0;

    sprintPlanning.historias.forEach(historia => {
      historia.tareas.forEach(tarea => {
        totalTareas++;
        if (tarea.estado === "Terminado") {
          tareasTerminadas++;
        }
      });
    });

    const porcentaje = Math.round((tareasTerminadas / totalTareas) * 100);
    return { completadas: tareasTerminadas, total: totalTareas, porcentaje };
  };

  const progreso = calcularProgreso();
  const formatoClaseEstado = (estado) => estado.toLowerCase().replace(/ /g, '-').replace(/\[.*\] /g, '').replace(/ó/g, 'o');

  return (
    <div className="app-container">
      <header className="sprint-header">
        <div className="header-top">
          <h1>{sprintPlanning.nombre}</h1>
          <span className="badge status-en-revision-final">{sprintPlanning.estado}</span>
        </div>
        <p className="sprint-goal">🎯 Objetivo: {sprintPlanning.objetivo}</p>
        
        {/* Nueva sección: Barra de progreso */}
        <div className="progreso-container">
          <div className="progreso-texto">
            <span>Progreso del Sprint</span>
            <span>{progreso.completadas} de {progreso.total} tareas ({progreso.porcentaje}%)</span>
          </div>
          <div className="barra-fondo">
            <div className="barra-relleno" style={{ width: `${progreso.porcentaje}%` }}></div>
          </div>
        </div>
      </header>

      <main className="historias-container">
        {sprintPlanning.historias.map((historia) => (
          <section key={historia.idHistoria} className="historia-card">
            <div className="historia-header">
              <h2>{historia.idHistoria}: {historia.alias}</h2>
              <span className="puntos-badge">⭐ {historia.puntosHistoria} pts</span>
            </div>
            
            <div className="tareas-grid">
              {historia.tareas.map((tarea) => (
                <div key={tarea.idTarea} className={`tarea-card ${tarea.estado === 'Terminado' ? 'tarea-completada' : ''}`}>
                  <h3>{tarea.titulo}</h3>
                  <div className="tarea-footer">
                    <span className="asignado">👤 {tarea.asignadoA}</span>
                    <span className="horas">⏱️ {tarea.horas}h</span>
                  </div>
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