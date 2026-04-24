import { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import profile from './profile.jpg';
import './App.css';
import DocumentacionParcial2 from './DocumentacionParcial2';
import DocumentacionParcial3 from './DocumentacionParcial3';

const CLIENT_ID = "147107726030-6ss1s5ub8355k24b35nnk9dt2s0ivsug.apps.googleusercontent.com";

function AppHome({ onNavigate }) {
  const [showDocs, setShowDocs] = useState(false);

  const handleDownload = (filePath, fileName) => {
    const basePath = process.env.PUBLIC_URL || '';
    fetch(basePath + filePath)
      .then(r => r.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url; link.download = fileName;
        document.body.appendChild(link); link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(e => console.error('Error descargando:', e));
  };

  return (
    <div className="App">
      <div className="container">
        <img src={profile} alt="Perfil" className="profile" />
        <p className="text">Alumno William Valenzuela de la Cruz</p>
        <p className="evaluation-text">Evaluacion Parcial 3</p>
        <a href="https://www.linkedin.com/in/william-valenzuela-de-la-cruz-58b2433a4" target="_blank" rel="noopener noreferrer" className="link">
          LINKEDIN DE MI PERFIL
        </a>
        <button className="main-btn" onClick={() => setShowDocs(!showDocs)}>DOCUMENTACIÓN PARCIAL 1</button>
        <button className="main-btn" onClick={() => onNavigate('partial2')} style={{ marginTop:'15px', backgroundColor:'#ff6b6b' }}>DOCUMENTACIÓN PARCIAL 2</button>
        <button className="main-btn" onClick={() => onNavigate('partial3')} style={{ marginTop:'15px', backgroundColor:'#4ecdc4' }}>DOCUMENTACIÓN PARCIAL 3 — ERS</button>

        {/* GOOGLE LOGIN COMPONENT */}
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3 style={{ color: '#61dafb', marginBottom: '15px' }}>Acceso con Google</h3>
          <GoogleLogin
            onSuccess={(response) => console.log("Login exitoso:", response)}
            onError={() => console.log("Error en login")}
            useOneTap
          />
        </div>

        {showDocs && (
          <div className="pdf-overlay">
            <div className="pdf-modal">
              <button className="close-btn" onClick={() => setShowDocs(false)}>✕</button>
              <h2 className="pdf-title">Centro de Descargas</h2>
              <div className="pdf-buttons">
                <button onClick={() => handleDownload('/pdfs/comandos.pdf','comandos.pdf')} className="pdf-btn-blue">COMANDOS BÁSICOS</button>
                <button onClick={() => handleDownload('/pdfs/ieee.pdf','ieee.pdf')} className="pdf-btn-blue">ESTÁNDAR IEEE</button>
                <button onClick={() => handleDownload('/pdfs/requerimientos.pdf','requerimientos.pdf')} className="pdf-btn-green">REQUERIMIENTOS</button>
                <button onClick={() => handleDownload('/pdfs/sha_256.pdf','sha_256.pdf')} className="pdf-btn-black">SHA-256 PYTHON</button>
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

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div>
        {currentPage === 'home'     && <AppHome onNavigate={(p) => setCurrentPage(p)} />}
        {currentPage === 'partial2' && <DocumentacionParcial2 onBackToHome={() => setCurrentPage('home')} />}
        {currentPage === 'partial3' && <DocumentacionParcial3 onBackToHome={() => setCurrentPage('home')} />}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
