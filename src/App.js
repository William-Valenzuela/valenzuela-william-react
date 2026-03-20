import { useState, useEffect } from 'react';
import profile from './profile.jpg';
import './App.css';
import DocumentacionParcial2 from './DocumentacionParcial2';

// COMPONENTE DEL PORTAFOLIO (Tu código original)
function AppHome({ onNavigate, setIsLoggedIn }) {
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
        {/* Botón para Salir */}
        <button 
          onClick={() => setIsLoggedIn(false)} 
          style={{ position: 'absolute', top: '20px', right: '20px', padding: '10px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#ff4b2b', color: 'white' }}
        >
          Cerrar Sesión
        </button>

        <img src={profile} alt="Perfil" className="profile" />
        <p className="text">Alumno William Valenzuela de la Cruz</p>
        <p className="evaluation-text">Evaluacion Parcial 1</p>

        <a href="https://www.linkedin.com/in/william-valenzuela-de-la-cruz-58b2433a4" target="_blank" rel="noopener noreferrer" className="link">
          LINKEDIN DE MI PERFIL
        </a>

        <button className="main-btn" onClick={() => setShowDocs(!showDocs)}>
          DOCUMENTACIÓN PARCIAL 1
        </button>

        <button className="main-btn" onClick={() => onNavigate('partial2')} style={{ marginTop: '15px', backgroundColor: '#ff6b6b' }}>
          DOCUMENTACIÓN PARCIAL 2
        </button>

        {showDocs && (
          <div className="pdf-overlay">
            <div className="pdf-modal">
              <button className="close-btn" onClick={() => setShowDocs(false)}>✕</button>
              <h2 className="pdf-title">Centro de Descargas</h2>
              <div className="pdf-buttons">
                <button onClick={() => handleDownload('/pdfs/comandos.pdf', 'comandos.pdf')} className="pdf-btn-blue">COMANDOS BÁSICOS</button>
                <button onClick={() => handleDownload('/pdfs/ieee.pdf', 'ieee.pdf')} className="pdf-btn-blue">ESTÁNDAR IEEE</button>
                <button onClick={() => handleDownload('/pdfs/requerimientos.pdf', 'requerimientos.pdf')} className="pdf-btn-green">REQUERIMIENTOS</button>
                <button onClick={() => handleDownload('/pdfs/sha_256.pdf', 'sha_256.pdf')} className="pdf-btn-black">SHA-256 PYTHON</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// COMPONENTE PRINCIPAL CON LOGIN
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCallbackResponse = (response) => {
    console.log("Logueado con éxito");
    setIsLoggedIn(true);
  };

  useEffect(() => {
    /* global google */
    if (!isLoggedIn && window.google) {
      google.accounts.id.initialize({
        client_id: "147107726030-6ss1s5ub8355k24b35nnk9dt2s0ivsug.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large", text: "signin_with" }
      );
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
        <h1 style={{ borderBottom: '2px solid #61dafb', paddingBottom: '10px' }}>Acceso al Portafolio</h1>
        <div style={{ background: '#444', padding: '20px', borderRadius: '10px', margin: '20px 0', textAlign: 'center' }}>
          <p><strong>"Estoy programando el login con Google"</strong></p>
        </div>
        {/* AQUÍ ES DONDE GOOGLE PINTA EL BOTÓN */}
        <div id="signInDiv"></div>
      </div>
    );
  }

  return (
    <>
      {currentPage === 'home' && <AppHome onNavigate={(p) => setCurrentPage(p)} setIsLoggedIn={setIsLoggedIn} />}
      {currentPage === 'partial2' && <DocumentacionParcial2 onBackToHome={() => setCurrentPage('home')} />}
    </>
  );
}

export default App;