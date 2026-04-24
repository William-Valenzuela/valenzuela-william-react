import { useState } from 'react';
import './DocumentacionParcial2.css';

// Importar imágenes
import cascada from './assets/practicas/1_cascada.svg';
import modeloV from './assets/practicas/2_modelo_v.svg';
import agiles from './assets/practicas/3_agiles.svg';
import scrum from './assets/practicas/4_scrum.svg';
import kanban from './assets/practicas/5_kanvan.svg';
import xp from './assets/practicas/6_xp.svg';
import hibridas from './assets/practicas/7_hibridas_modernas.svg';

const DocumentacionParcial2 = ({ onBackToHome }) => {
  const [selectedModal, setSelectedModal] = useState(null);

  // Datos de las metodologías
  const metodologias = [
    {
      id: 1,
      titulo: 'Modelo Cascada',
      imagen: cascada,
      descripcion: 'El Modelo Cascada es un enfoque de desarrollo de software lineal y secuencial. Cada fase debe completarse antes de pasar a la siguiente. Las fases típicas incluyen: requisitos, diseño, implementación, pruebas, implantación y mantenimiento. Este modelo es útil para proyectos con requisitos bien definidos y cambios mínimos esperados.'
    },
    {
      id: 2,
      titulo: 'Modelo V',
      imagen: modeloV,
      descripcion: 'El Modelo V es una extensión del Modelo Cascada que enfatiza la validación y verificación. Cada fase de desarrollo en el lado descendente tiene una fase de prueba correspondiente en el lado ascendente. Proporciona mayor garantía de calidad y detecta defectos más tempranamente en el proceso.'
    },
    {
      id: 3,
      titulo: 'Metodologías Ágiles',
      imagen: agiles,
      descripcion: 'Las Metodologías Ágiles son enfoques iterativos e incrementales que priorizan la flexibilidad y la respuesta rápida a cambios. Se basan en principios como la comunicación continua, entrega frecuente de software funcional, y colaboración estrecha con el cliente. Incluyen métodos como SCRUM, Kanban y Extreme Programming.'
    },
    {
      id: 4,
      titulo: 'SCRUM',
      imagen: scrum,
      descripcion: 'SCRUM es un marco de trabajo ágil que organiza el trabajo en sprints (ciclos cortos, generalmente de 2-4 semanas). Utiliza roles definidos (Product Owner, Scrum Master, Team), reuniones regulares (Daily Standup, Sprint Planning, Sprint Review) y artefactos (Product Backlog, Sprint Backlog, Increment). Maximiza la productividad y la calidad del producto.'
    },
    {
      id: 5,
      titulo: 'KANBAN',
      imagen: kanban,
      descripcion: 'KANBAN es un método visual de gestión del flujo de trabajo. Utiliza un tablero (físico o digital) con columnas que representan estados del trabajo (Por hacer, En progreso, Hecho). Limita el trabajo en progreso (WIP) para mejorar la eficiencia y el flujo continuo. Ideal para equipos con trabajos variados y cambios frecuentes de prioridades.'
    },
    {
      id: 6,
      titulo: 'Extreme Programming (XP)',
      imagen: xp,
      descripcion: 'Extreme Programming es una metodología ágil que enfatiza la excelencia técnica. Sus prácticas incluyen: programación en parejas, pruebas unitarias automatizadas, integración continua, refactorización constante, diseño simple y feedback rápido. Produce código de alta calidad y sistemas más confiables.'
    },
    {
      id: 7,
      titulo: 'Metodologías Híbridas o Modernas',
      imagen: hibridas,
      descripcion: 'Las Metodologías Híbridas combinan elementos de diferentes enfoques (cascada y ágil) adaptándose a las necesidades específicas del proyecto. Las metodologías modernas como SAFe, DevOps y Lean integran prácticas ágiles con enfoque en escalabilidad, automatización y mejora continua. Permiten flexibilidad manteniendo estructura y gobernanza.'
    }
  ];

  // Frase del alumno (esto debería venir del estado o una base de datos)
  const fraseDelAlumno = "Nuestro equipo busca mejorar la calidad del software mediante metodologías ágiles y prácticas de desarrollo continuo.";

  return (
    <div className="documentacion-partial2">
      {/* Encabezado */}
      <header className="doc-header">
        <h1 className="doc-title">ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
        <p className="doc-student">Alumno(a): William Valenzuela de la Cruz</p>
        
        <a
          href="https://www.linkedin.com/in/william-valenzuela-de-la-cruz-58b2433a4"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LINKED IN DE MI PROFILE
        </a>

        {/* Botones de navegación entre documentaciones */}
        <div className="doc-nav-buttons">
          <button className="nav-button doc-button-1" onClick={onBackToHome}>
            DOCUMENTACIÓN PARCIAL 1
          </button>
          <button className="nav-button doc-button-2 active">
            DOCUMENTACIÓN PARCIAL 2
          </button>
        </div>
      </header>

      {/* Sección de Metodologías */}
      <section className="metodologias-section">
        <h2 className="section-title">Metodologías de Desarrollo de Software</h2>
        
        <div className="metodologias-grid">
          {metodologias.map((metodologia) => (
            <div key={metodologia.id} className="metodologia-card">
              <img src={metodologia.imagen} alt={metodologia.titulo} className="metodologia-imagen" />
              <h3 className="metodologia-titulo">{metodologia.titulo}</h3>
              <button
                className="ver-info-btn"
                onClick={() => setSelectedModal(metodologia)}
              >
                VER INFORMACIÓN
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Botón de JIRA */}
      <section className="jira-section">
        <a
          href="https://williamdelacruz696.atlassian.net/jira/software/projects/SCRUM/boards/1?sprintStarted=true"
          target="_blank"
          rel="noopener noreferrer"
          className="jira-button"
        >
          JIRA
        </a>
      </section>

      {/* Sección de Frase del Tablero Ágil */}
      <section className="frase-section">
        <h2 className="frase-title">Escribe la frase que colocaste en el tablero de metodología ágil</h2>
        <div className="frase-content">
          <p className="frase-text">{fraseDelAlumno}</p>
        </div>
      </section>

      {/* Botón Regresar */}
      <section className="footer-section">
        <button className="regresar-button" onClick={onBackToHome}>
          REGRESAR MENÚ PRINCIPAL
        </button>
      </section>

      {/* Modal Explicativo */}
      {selectedModal && (
        <div className="modal-overlay" onClick={() => setSelectedModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedModal(null)}>✕</button>
            <h2 className="modal-title">{selectedModal.titulo}</h2>
            <img src={selectedModal.imagen} alt={selectedModal.titulo} className="modal-imagen" />
            <p className="modal-descripcion">{selectedModal.descripcion}</p>
            <button className="modal-close-btn" onClick={() => setSelectedModal(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentacionParcial2;
