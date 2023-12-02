import React from 'react'
import '../assets/styles/Acerca.css'
import tesoro from '../assets/images/tesoro.png'

function Acerca() {
    return (
        <>
        <h1 className='title'>Acerca del juego</h1>
        <div className="estructura">
            <p className="justificar">Cómo equipo nos interesa que las personas puedan disfrutar de un buen 
                juego y puedan tener un momento de diversión. 
                Es por esto que, nos encontramos creando “Road to el Dorado”, 
                un juego que te permitirá pasar un buen rato junto a tus amigos. 

            </p>
            <div className='contenedor'>
                <img src={tesoro} className='photo'></img>
            <p className="parrafoa">El juego consiste en la búsqueda del tesoro, pero llegar, no es una tarea fácil,
                 se requiere de mucha estrategia y algo de suerte. 
                 Te invitamos a leer las reglas y la guía de iniciación para conocer
                  más acerca del funcionamiento de este maravilloso juego. </p>
            
 
            </div>
        
        <p className="justificar">Actualmente el juego está en desarrollo, 
            por lo que no podrás jugar aún, pero te dejamos invitado a 
            probar esta experiencia una vez que esté listo. 
            Para esto es muy importante que estés pendiente, 
            pues pronto vienen actualizaciones y la posibilidad de jugar.
        </p>
        
        </div>
        <footer>IIC2513Games</footer>
        </>
    )
}
export default Acerca