import { render, screen } from '@testing-library/react';
import App from './App';

describe('Pruebas del Sprint 1 - Lógica y Requerimientos', () => {

  test('Validar matemáticamente que el progreso del Sprint calcula el 100%', () => {
    render(<App />);
    
    // Busca en la pantalla el texto exacto que confirma que 10 de 10 tareas están listas
    // Si la función calcularProgreso() falla, esta prueba marcará error.
    const textoProgreso = screen.getByText(/10 de 10 tareas \(100%\)/i);
    expect(textoProgreso).toBeInTheDocument();
  });

  test('Validar que la tarea crítica del IVA (Requerimiento legal) está presente y terminada', () => {
    render(<App />);
    
    // Verifica que la tarea exista
    const tituloTareaIVA = screen.getByText(/Añadir desglose de IVA \(16%\) al total/i);
    expect(tituloTareaIVA).toBeInTheDocument();

    // Extrae el contenedor de la tarea para verificar su estado interno
    const tarjetaTarea = tituloTareaIVA.closest('.tarea-card');
    const estado = tarjetaTarea.querySelector('.estado-tarea');
    
    // Valida que no se haya regresado accidentalmente a "En Progreso"
    expect(estado).toHaveTextContent('Terminado');
  });

  test('Validar que el banner de Retrospectiva se muestra al finalizar', () => {
    render(<App />);
    
    // Confirma que el mensaje de éxito del review esté renderizado
    const bannerRetro = screen.getByText(/Sprint exitoso/i);
    expect(bannerRetro).toBeInTheDocument();
  });

});