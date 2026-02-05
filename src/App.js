import { useState } from 'react';
import profile from './profile.jpg';
import './App.css';

function App() {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="App">
      <div className="container">

        <img src={profile} alt="Perfil" className="profile" />

        <p className="text">
          Alumno William Valenzuela de la Cruz
        </p>

        <p className="evaluation-text">
          Evaluacion Parcial 1
        </p>

        <a
          href="https://www.linkedin.com/in/william-valenzuela-de-la-cruz-58b2433a4"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          LINKEDIN DE MI PERFIL
        </a>

        {/* BOTÓN PRINCIPAL */}
        <button
          className="main-btn"
          onClick={() => setShowDocs(!showDocs)}
        >
          DOCUMENTACIÓN PARCIAL 1
        </button>

        {/* PDFs OCULTOS */}
        {showDocs && (
          <div className="pdf-overlay">
            <div className="pdf-modal">
              <button className="close-btn" onClick={() => setShowDocs(false)}>✕</button>
              <h2 className="pdf-title">Centro de Descargas</h2>
              <p className="pdf-subtitle">Click en los botones para obtener tus archivos PDF</p>
              <div className="pdf-buttons">
                <a href="/pdfs/comandos.pdf" download className="pdf-btn-blue">COMANDOS BÁSICOS DE REACT</a>
                <a href="/pdfs/ieee.pdf" download className="pdf-btn-blue">ISO / ESTÁNDAR IEEE</a>
                <a href="/pdfs/requerimientos.pdf" download className="pdf-btn-green">REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</a>
                <a href="/pdfs/sha_256.pdf" download className="pdf-btn-black">CÓDIGO PYTHON ALGORITMO SHA-256</a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
