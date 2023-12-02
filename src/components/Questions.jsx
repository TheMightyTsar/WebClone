import React from 'react'
import '../assets/styles/Questions.css'

function Questions() {
    return (
        <>
        <h1 className='title'>Preguntas Frecuentes</h1>
        <div className="estructura">
            <p className="parrafo">Estas son las preguntas que mas se repiten y mas comunes respecto al juego 
                que hemos creado: 

            </p>

            <div>
                <h3>¿Se puede jugar sin estar registrado?</h3>
                <p>No, "Road To El Dorado" solo permite crear y jugar partidas si eres un usuario ya registrado. Sin embargo
                    podrás ser espectador de partidas ya existentes si cuentas con el código de partida. </p>

                <h3>¿Cuantos jugadores son por partida?</h3>
                <p>La cantidad necesaria de jugadores para una partida son de 4 personas. La partida comenzará solo una vez
                    que esten todos conectados y listos para jugar.
                </p>

                <h3>¿Cuanto es el tiempo promedio de una partida?</h3>
                <p>En promedio las partidas estan pensadas para durar 45 min, lo cual puede depender de la suerte que tengan
                    los jugadores.
                </p>

                <h3>¿Cuando se podrá comanzar a jugar?</h3>
                <p>Por el momento el juego no esta funcionando activamente, pero ya pronto se podrá disfrutar de todo lo que
                    "Road To El Dorado" tiene para ofrecer.
                </p>
            </div>
        
        </div>
        <footer>IIC2513Games</footer>
        </>
    )
}
export default Questions