import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';
import '../assets/styles/Login.css';

function Options(){
    const {token, setToken} = useContext(AuthContext);  
    const [error, setError] = useState(false);
    const [code, setCode] = useState("");
    const [msg, setMsg] = useState("");

    const handleCrear = async (event) => {
        event.preventDefault();

        const config = {
          'method': 'get',
          'url': `${import.meta.env.VITE_BACKEND_URL}/createGame`,
          'headers': {
              'Authorization': `Bearer ${token}`
          }
      };
      axios(config).then((response) => {
                  console.log(response)
                  setMsg(response.data.response);
                  const access_token = response.data.access_token;
                  setToken(access_token);
              }).catch((error) => {
                  setError(true);
                  setMsg(error.response.data);
              })
          }
      
    const handleSubmit = async (event) => {
        event.preventDefault();

        const config = {
            'headers': {
                'Authorization': `Bearer ${token}`
            },
            'body': {
                "code": code
            }
        };
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/joinGame`, config)
            .then((response) => {
                console.log('Join successful');
                setError(false);
                setMsg("Join exitoso!");
              }).catch((error) => {
                console.log( error.response.data);
                console.log('hubo un error')
                setError(true);// aquí puede haber más lógica para tratar los errores
                setMsg(error.response.data)
              })
            }  
      
    return (
    <>
    <h1 className='title'>Jugar</h1>
    <div>
        {msg.length > 0 && <div className="successMsg"> {msg} </div>}
    </div>
    <div className='Login'>
    <form onSubmit={handleSubmit}>
        <label>
          Código:
          <input 
            type="text" 
            name="code"
            value={code}
            onChange={e => setCode(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      </div>

      <div className='loginDiv'>
        <button className='boton' onClick={handleCrear}>Crear partida</button>
    </div>
    </>
    )
}
export default Options;