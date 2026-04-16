import { useState } from 'react';
import './DocumentacionParcial3.css';

const DocumentacionParcial3 = ({ onBackToHome }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  // ── DATOS DEL PROYECTO ──────────────────────────────────────────────
  const proyecto = {
    nombre: 'Sistema de Inventario – Papelería Valeria',
    inicio: '03 de Febrero de 2026',
    termino: '30 de Mayo de 2026',
    resumen: `El Sistema de Inventario para Papelería Valeria es una aplicación web desarrollada con React que permite gestionar de manera eficiente el control de productos, stock, entradas y salidas de mercancía. El sistema cuenta con módulos de autenticación de usuarios, catálogo de productos, gestión de inventario en tiempo real y generación de reportes. Su objetivo principal es digitalizar y automatizar los procesos manuales de la papelería, reduciendo errores humanos, optimizando tiempos de consulta y brindando información confiable al administrador del negocio para una toma de decisiones más acertada.`,
  };

  // ── JERARQUÍA ────────────────────────────────────────────────────────
  const jerarquia = [
    { rol: 'Product Owner', nombre: 'William Valenzuela de la Cruz', nivel: 1 },
    { rol: 'Scrum Master', nombre: 'Equipo de Desarrollo', nivel: 2 },
    { rol: 'Desarrollador Frontend', nombre: 'William Valenzuela', nivel: 3 },
    { rol: 'Desarrollador Backend', nombre: 'Equipo Técnico', nivel: 3 },
    { rol: 'Tester / QA', nombre: 'Equipo de Calidad', nivel: 3 },
  ];

  // ── ODS ──────────────────────────────────────────────────────────────
  const ods = {
    numero: 'ODS 8',
    titulo: 'Trabajo Decente y Crecimiento Económico',
    descripcion: `El proyecto contribuye al ODS 8 al apoyar el crecimiento de micro y pequeñas empresas locales como Papelería Valeria mediante la digitalización de sus procesos de inventario. Al automatizar el control de mercancía, el sistema permite reducir pérdidas económicas por desabasto o sobrestock, optimizar la operación del negocio y liberar tiempo del personal para actividades de mayor valor, impulsando así la productividad y sostenibilidad del comercio local.`,
    color: '#e74c3c',
  };

  // ── METODOLOGÍA ──────────────────────────────────────────────────────
  const metodologia = {
    nombre: 'SCRUM',
    descripcion: `SCRUM es un marco de trabajo ágil e iterativo que organiza el desarrollo de software en ciclos cortos llamados Sprints (2–4 semanas). Se basa en tres pilares: transparencia, inspección y adaptación. El equipo se compone de un Product Owner (define prioridades), un Scrum Master (facilita el proceso) y el Equipo de Desarrollo (ejecuta las tareas). Los artefactos principales son el Product Backlog, el Sprint Backlog y el Incremento. Las ceremonias incluyen Sprint Planning, Daily Standup, Sprint Review y Sprint Retrospective.`,
    pantallazos: [
      {
        id: 'sprint',
        titulo: 'Sprint Activo',
        descripcion: 'Sprint en curso con tareas distribuidas: TO DO (1), IN PROGRESS (2), IN REVIEW (2), DONE (0). Tickets activos: SCRUM-3 Tabla usuarios, SCRUM-5 Crear base de datos, SCRUM-9 Implementar login, SCRUM-10 CRUD productos, SCRUM-7 Tabla productos.',
        color: '#3498db',
        icon: '🏃',
      },
      {
        id: 'backlog',
        titulo: 'Product Backlog',
        descripcion: 'Lista priorizada de funcionalidades: autenticación de usuarios, gestión de productos, control de inventario, reportes, CRUD completo, integración de base de datos y despliegue del sistema.',
        color: '#9b59b6',
        icon: '📋',
      },
      {
        id: 'tablero',
        titulo: 'Tablero Kanban / Scrum',
        descripcion: 'Tablero del proyecto "Sistema de Inventario – Papelería Valeria" en Jira con columnas: TO DO, IN PROGRESS, IN REVIEW y DONE. Permite visualizar el flujo de trabajo del equipo en tiempo real.',
        color: '#27ae60',
        icon: '📊',
      },
    ],
  };

  // ── REQUERIMIENTOS ───────────────────────────────────────────────────
  const reqFuncionales = [
    'RF-01: El sistema debe permitir el inicio de sesión con autenticación de usuario y contraseña.',
    'RF-02: El sistema debe mostrar un catálogo de productos con nombre, categoría, precio y stock.',
    'RF-03: El sistema debe permitir registrar nuevos productos (CRUD completo).',
    'RF-04: El sistema debe actualizar automáticamente el inventario al registrar entradas o salidas.',
    'RF-05: El sistema debe generar alertas cuando el stock de un producto esté por debajo del mínimo.',
    'RF-06: El sistema debe permitir buscar productos por nombre o categoría.',
    'RF-07: El sistema debe generar reportes de inventario en formato descargable.',
    'RF-08: El sistema debe llevar un historial de movimientos de inventario.',
  ];

  const reqNoFuncionales = [
    'RNF-01: El sistema debe responder en menos de 2 segundos ante cualquier consulta.',
    'RNF-02: El sistema debe ser compatible con los navegadores Chrome, Firefox y Edge.',
    'RNF-03: La interfaz debe ser responsiva y adaptarse a dispositivos móviles y de escritorio.',
    'RNF-04: El sistema debe garantizar la seguridad de los datos mediante autenticación segura.',
    'RNF-05: El sistema debe tener una disponibilidad mínima del 95% mensual.',
    'RNF-06: El código debe seguir buenas prácticas de desarrollo (componentes reutilizables en React).',
    'RNF-07: El sistema debe ser escalable para soportar hasta 500 productos registrados.',
  ];

  // ── MOCKUPS ──────────────────────────────────────────────────────────
  const mockups = [
    { id: 1, titulo: 'Pantalla de Login', descripcion: 'Formulario de acceso con campo usuario, contraseña y botón de ingreso. Fondo oscuro con logo del sistema.', icon: '🔐', color: '#2c3e50' },
    { id: 2, titulo: 'Dashboard Principal', descripcion: 'Panel con métricas clave: total de productos, alertas de stock bajo, últimos movimientos y accesos rápidos a módulos.', icon: '📈', color: '#2980b9' },
    { id: 3, titulo: 'Catálogo de Productos', descripcion: 'Tabla con lista de productos, búsqueda por nombre/categoría, botones para editar, eliminar y agregar nuevo producto.', icon: '📦', color: '#8e44ad' },
    { id: 4, titulo: 'Formulario de Producto', descripcion: 'Modal con campos: nombre, descripción, categoría, precio, stock actual y stock mínimo. Botones Guardar/Cancelar.', icon: '📝', color: '#16a085' },
    { id: 5, titulo: 'Reporte de Inventario', descripcion: 'Vista de reporte con tabla de movimientos, filtros por fecha y categoría, y botón para descargar en PDF.', icon: '📄', color: '#c0392b' },
  ];

  // ── CONCLUSIONES ─────────────────────────────────────────────────────
  const conclusiones = {
    proyecto: `El desarrollo del Sistema de Inventario para Papelería Valeria representó un reto técnico y organizacional muy enriquecedor. A través de la metodología SCRUM pudimos dividir el trabajo en sprints manejables, lo que facilitó la detección temprana de problemas y la entrega incremental de valor. El uso de React como tecnología principal permitió construir una interfaz dinámica y reutilizable. En general, el proyecto cumplió con los objetivos planteados en la ERS y dejó una base sólida para futuras mejoras y escalabilidad del sistema.`,
    materia: `La materia de Análisis y Diseño de Software me proporcionó las herramientas conceptuales y prácticas necesarias para abordar proyectos de software de manera profesional. Aprendí a documentar correctamente los requerimientos funcionales y no funcionales, a utilizar estándares como la ERS, a trabajar con metodologías ágiles como SCRUM y a gestionar proyectos mediante herramientas como Jira. Estos conocimientos son fundamentales en el desarrollo de software y los aplicaré en mi vida profesional.`,
  };

  return (
    <div className="p3-container">
      {/* HEADER */}
      <header className="p3-header">
        <div className="p3-header-badge">PARCIAL 3</div>
        <h1 className="p3-title">ESPECIFICACIONES DE REQUERIMIENTOS DE SOFTWARE</h1>
        <p className="p3-subtitle">ERS — Análisis y Diseño de Software</p>
        <p className="p3-student">Alumno: William Valenzuela de la Cruz</p>
        <button className="p3-back-btn" onClick={onBackToHome}>← Menú Principal</button>
      </header>

      <main className="p3-main">

        {/* 1. DATOS DEL PROYECTO */}
        <Section id="datos" label="01" titulo="Datos del Proyecto" active={activeSection} toggle={toggleSection}>
          <div className="p3-info-grid">
            <InfoCard label="Nombre del Proyecto" value={proyecto.nombre} />
            <InfoCard label="Fecha de Inicio" value={proyecto.inicio} />
            <InfoCard label="Fecha de Término" value={proyecto.termino} />
          </div>
          <div className="p3-resumen-box">
            <h4>Resumen</h4>
            <p>{proyecto.resumen}</p>
          </div>
        </Section>

        {/* 2. ORGANIZACIÓN */}
        <Section id="org" label="02" titulo="Estructura de la Organización" active={activeSection} toggle={toggleSection}>
          <div className="p3-org-chart">
            {jerarquia.map((item, i) => (
              <div key={i} className={`p3-org-node nivel-${item.nivel}`}>
                <div className="p3-org-rol">{item.rol}</div>
                <div className="p3-org-nombre">{item.nombre}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* 3. ODS */}
        <Section id="ods" label="03" titulo="Justificación ODS" active={activeSection} toggle={toggleSection}>
          <div className="p3-ods-card" style={{ borderLeft: `6px solid ${ods.color}` }}>
            <div className="p3-ods-badge" style={{ background: ods.color }}>{ods.numero}</div>
            <h3>{ods.titulo}</h3>
            <p>{ods.descripcion}</p>
          </div>
        </Section>

        {/* 4. METODOLOGÍA */}
        <Section id="metodo" label="04" titulo="Metodología: SCRUM" active={activeSection} toggle={toggleSection}>
          <div className="p3-metodo-desc">
            <p>{metodologia.descripcion}</p>
          </div>
          <h4 className="p3-sub-title">Capturas de Jira</h4>
          <div className="p3-pantallazos">
            {metodologia.pantallazos.map((p) => (
              <div key={p.id} className="p3-pantallazo-card" style={{ borderTop: `4px solid ${p.color}` }}>
                <div className="p3-pantallazo-icon">{p.icon}</div>
                <h4>{p.titulo}</h4>
                <p>{p.descripcion}</p>
                <div className="p3-jira-badge" style={{ background: p.color }}>Jira — {p.titulo}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. REQUERIMIENTOS */}
        <Section id="req" label="05" titulo="Requerimientos" active={activeSection} toggle={toggleSection}>
          <div className="p3-req-grid">
            <div className="p3-req-col">
              <h4 className="p3-req-title funcional">✅ Funcionales</h4>
              <ul className="p3-req-list">
                {reqFuncionales.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
            <div className="p3-req-col">
              <h4 className="p3-req-title no-funcional">⚙️ No Funcionales</h4>
              <ul className="p3-req-list">
                {reqNoFuncionales.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        {/* 6. MOCKUPS */}
        <Section id="mockups" label="06" titulo="Diseño Esperado (Mockups)" active={activeSection} toggle={toggleSection}>
          <div className="p3-mockups-grid">
            {mockups.map((m) => (
              <div key={m.id} className="p3-mockup-card">
                <div className="p3-mockup-screen" style={{ background: m.color }}>
                  <div className="p3-mockup-icon">{m.icon}</div>
                  <div className="p3-mockup-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="p3-mockup-bars">
                    <div></div><div></div><div></div><div></div>
                  </div>
                </div>
                <div className="p3-mockup-info">
                  <span className="p3-mockup-num">0{m.id}</span>
                  <h4>{m.titulo}</h4>
                  <p>{m.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. CONCLUSIONES */}
        <Section id="conclusiones" label="07" titulo="Conclusiones" active={activeSection} toggle={toggleSection}>
          <div className="p3-conclusion-card">
            <h4>📌 Conclusiones del Proyecto</h4>
            <p>{conclusiones.proyecto}</p>
          </div>
          <div className="p3-conclusion-card materia">
            <h4>🎓 Conclusiones de la Materia</h4>
            <p>{conclusiones.materia}</p>
          </div>
        </Section>

      </main>

      <footer className="p3-footer">
        <p>Sistema de Inventario – Papelería Valeria · ERS 2026</p>
        <button className="p3-back-btn-footer" onClick={onBackToHome}>← Regresar al Menú</button>
      </footer>
    </div>
  );
};

// ── COMPONENTES AUXILIARES ───────────────────────────────────────────────────

const Section = ({ id, label, titulo, active, toggle, children }) => (
  <section className={`p3-section ${active === id ? 'open' : ''}`}>
    <button className="p3-section-header" onClick={() => toggle(id)}>
      <span className="p3-section-label">{label}</span>
      <span className="p3-section-titulo">{titulo}</span>
      <span className="p3-section-arrow">{active === id ? '▲' : '▼'}</span>
    </button>
    {active === id && <div className="p3-section-body">{children}</div>}
  </section>
);

const InfoCard = ({ label, value }) => (
  <div className="p3-info-card">
    <span className="p3-info-label">{label}</span>
    <span className="p3-info-value">{value}</span>
  </div>
);

export default DocumentacionParcial3;
