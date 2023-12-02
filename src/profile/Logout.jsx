import '../assets/styles/Login.css';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const LogoutButton=() => {
  const { logout } = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  const handleLogout = () => {
    logout();
    setMsg("Has hecho logout con éxito!");
  }

  return (
    <>
        {msg.length > 0 && <div> {msg} </div>}
        <button onClick={handleLogout}>
        Cerrar sesión
        </button>
    </>
  );
}

export default LogoutButton;