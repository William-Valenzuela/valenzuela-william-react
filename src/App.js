import profile from './profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="Perfil" />
        <p>
          Hola mundo en React. Alumno: William Valenzuela
        </p>
        <a
          className="App-link"
          href="https://utd.edu.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISITAR EL SITIO WEB
        </a>
      </header>
    </div>
  );
}

export default App;
