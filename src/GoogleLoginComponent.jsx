import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = () => {
  const handleSuccess = (response) => {
    console.log('Login Success:', response);
    // Aquí puedes manejar la respuesta del login
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h3>Iniciar Sesión con Google</h3>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};

export default GoogleLoginComponent;