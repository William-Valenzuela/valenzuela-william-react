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
          <div className="pdf-buttons">
            <a href="/pdfs/comandos.pdf" download>COMANDOS BÁSICOS DE REACT</a>
            <a href="/pdfs/ieee.pdf" download>ISO / ESTÁNDAR IEEE</a>
            <a href="/pdfs/requerimientos.pdf" download>REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</a>
            <a href="/pdfs/sha_256.pdf" download>CÓDIGO PYTHON ALGORITMO SHA-256</a>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
