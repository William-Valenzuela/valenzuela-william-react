import { useState } from 'react';
import profile from './profile.jpg';
import './App.css';
import DocumentacionParcial2 from './DocumentacionParcial2';

function AppHome({ onNavigate }) {
  const [showDocs, setShowDocs] = useState(false);

  const handleDownload = (filePath, fileName) => {
    const basePath = process.env.PUBLIC_URL || '';
    const fullPath = basePath + filePath;
    
    fetch(fullPath)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error descargando:', error));
  };

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

        {/* Botón para ir a Documentación Parcial 2 */}
        <button
          className="main-btn"
          onClick={() => onNavigate('partial2')}
          style={{ marginTop: '15px', backgroundColor: '#ff6b6b' }}
        >
          DOCUMENTACIÓN PARCIAL 2
        </button>

        {/* PDFs OCULTOS */}
        {showDocs && (
          <div className="pdf-overlay">
            <div className="pdf-modal">
              <button className="close-btn" onClick={() => setShowDocs(false)}>✕</button>
              <h2 className="pdf-title">Centro de Descargas</h2>
              <p className="pdf-subtitle">Click en los botones para obtener tus archivos PDF</p>
              <div className="pdf-buttons">
                <button onClick={() => handleDownload('/pdfs/comandos.pdf', 'comandos.pdf')} className="pdf-btn-blue">COMANDOS BÁSICOS DE REACT</button>
                <button onClick={() => handleDownload('/pdfs/ieee.pdf', 'ieee.pdf')} className="pdf-btn-blue">ISO / ESTÁNDAR IEEE</button>
                <button onClick={() => handleDownload('/pdfs/requerimientos.pdf', 'requerimientos.pdf')} className="pdf-btn-green">REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</button>
                <button onClick={() => handleDownload('/pdfs/sha_256.pdf', 'sha_256.pdf')} className="pdf-btn-black">CÓDIGO PYTHON ALGORITMO SHA-256</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'home' && <AppHome onNavigate={handleNavigate} />}
      {currentPage === 'partial2' && <DocumentacionParcial2 onBackToHome={() => handleNavigate('home')} />}
    </>
  );
}

export default App;
