import React from 'react'
import '../assets/styles/Guide.css'

function Guide(){
    return(
        <>
        <h1 className='title'>Guía de iniciación</h1>
        <div className='gui'>
            <p className='subtitle'>
                Usuario no registrado:
            </p>
            <p className='parrafog'>
                Si no estas registrado, solo podrás acceder como espectador a alguna partida que ya haya sido iniciada.
                Para lograr esto, debes dirigirte a la sección 'Espectar' que se encuentra en la página de inicio. Pulsas el botón y 
                luego deberás ingresar el código de la partida. En esta, solo podrás ver a los jugadores y su estado.
            </p>
            <p className='subtitle'>
                Usuario registrado:
            </p>
            <p className='parrafog'>
                Para poder iniciar una partida o unirte, lo primero que debes hacer es
                crearte un cuenta. Esto lo puedes hacer pulsando el botón 'Registrase' que se encuentra en la página de inicio. Una vez hayas 
                terminado, debes iniciar sesión, en la misma página de inicio. 
            </p>
            <p className='subtitle'>
                Iniciar partida: 
            </p>
            <p className='parrafog'>
                Luego de iniciar sesión, tendrás la opción de crear partida. Esto te permitirá generar una nueva partida, en
                la que otros jugadores podrán unirse. Para lograr esto deberás ir a la sección 'Jugar' y luego deberás ir a la opción crear sala. Posterior 
                a esto, se creará la nueva partida y se te entregará el código de esta para que los demás jugadores puedan ingresar.
            </p>
            <p className='subtitle'>
                Unirse a una partida:
            </p>
            <p className='parrafog'>
                Similar a iniciar una partida, deberás dirigirte a 'Jugar', pero para unirse a una partida, solo
                deberás ingresar el código de la partida que deseas unirte. Una vez hecho esto, te unirás automaticamente a la nueva partida.
            </p>
        </div>
        <footer>IIC2513</footer>
        </>
    )
}

export default Guide