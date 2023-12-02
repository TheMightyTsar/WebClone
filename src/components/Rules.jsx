import React from 'react'
import '../assets/styles/Rules.css'

function Rules(){
    return(
        <>
        <div className='fondo'>

        <h1 className='title'>Reglas</h1>
        <div>
            <h2 className='indication'>
                Antes de comenzar a jugar, es muy importante que leas las siguientes reglas. 
                Esta te permitirán entender el juego y te ayudarán a planear una buena estrategia de juego.
            </h2>
            <div className='fondos'>
            <ul>
                <li>
                    <p className='texto'>Al iniciar, todos los jugadores lanzarán un dado, el jugador que obtenga la 
                    mayor puntuación será el primero en jugar. Los demás jugadores tendrán su turno en el orden de puntuación, de mayor 
                    a menor.</p>
                </li>
                <li>
                    <p className='texto'>En un principio, todos los jugadores contarán con 3 de energía y 5 monedas, las cuales
                    podrán usar para excavar y comprar en la tienda, respectivamente.
                    </p>
                </li>
                <li>
                    <p className='texto'>
                    En cada turno, los jugadores ganarán 2 de energía y lanzarán un dado, el cual les indicará la cantidad de casillas que se deben mover.
                    </p>
                </li>
                <li>
                    <p className='texto'>
                    Existen casillas que se pueden excavar, otras que permiten acceder a la tienda y otras que no permiten interacción.
                    </p>
                </li>

                <li>
                    <p className='texto'>
                        Si el jugador cae en la tienda, podrá elegir entre comprar pociones y trampas. Para esto, 
                        necesitará contar con una cantidad de monedas suficientes para poder adquirir el objeto que desee. En caso de 
                        no contar con esta cantidad, no podrá comprar el objeto.
                    </p>
                    <p className='texto'>
                        Las pociones le entregan algún poder al jugador por una cantidad limitada de turnos. Entre las distintas 
                        pociones, se encuentran las que aumentan la energía que se recibe por turno, las que disminuyen 
                        la energía requerida para excavar y las que otorgan un mejor dado.
                    </p>
                    <p className='texto'>
                        En cuanto a las trampas, estas son adquiridas con el fin de posicionarlas en alguna casilla y, así
                        otro jugador las encuentre y le inflinjan un daño. Existen 3 tipos de trampas:

                        <div className='lista2'>
                                <div className='estructure'>
                                    <p>
                                    Arenas movedizas
                                    </p>
                                    <p>Hacen al jugador perder un turno.
                                </p>
                                </div>
                                <div className='estructure'>
                                <p>
                                    Serpientes</p>
                                    <p> Quitan monedas al jugador.
                                </p>
                                </div>
                                <div className='estructure'>
                                <p>
                                    Dardos venenosos</p>
                                    <p> Quitan energía al jugador.
                                </p>
                                </div>
                        </div>  
                    </p>

                </li>                
                <li>
                    <p className='texto'>
                        Si el jugador cae en una casilla excavable, necesitará energía para poder excavar. Especificamente, necesitará
                        2 de energía para excavar tierra, 4 para excavar grava y 6 para excavar roca. En caso de que
                        el jugador no cuente con energía suficiente, no podrá excavar y su turno se dará por finalizado.
                     </p>
                    <p className='texto'>
                        A través de la excavación, se pueden encontrar monedas y amuletos. Los amuletos pueder generar un efecto positivo
                        o negativo en el jugador que los encuentra. Una vez encontrado el amuleto, no se puede
                        deshechar hasta que encuentra otro. Los amuletos que pueden encontrarse, son los siguientes:

                    </p>
                    <div className='lista2'>
                        <div className='estructure'>
                                
                            <p>
                                Coronas</p>
                                <p>Cambian la energía que el jugador recibe por turno.
                            </p>
                        </div>
                        <div className='estructure'>
                                
                            <p>
                                Collares</p>
                                <p>
                                    Cambian la cantidad de monedas encontradas al excavar.
                            </p>
                        </div>
                        <div className='estructure'>
                                
                            <p>
                                Anillos</p>
                                <p>Cambian el dado usado al inicio del turno.
                            </p>
                        </div>
                        <div className='estructure'>
                                
                            <p>
                                Palas</p>
                                <p>
                                    Cambian la energía necesaria para excavar.
                            </p>
                        </div>
                    </div>
                    <p className='texto'>
                        Adicionalmente, en estas casillas 
                        se podrán posicionar trampas. Las cuales generan un efecto inmediato un vez que el jugador cae en esta casilla,
                        es decir no es necesario excavar para que actúen. 
                    </p>
                </li>
                <li>
                    <p className='texto'>
                        En el tablero se encuentran 4 túneles repartidos aleatoriamente, los cuales llevan al jugador al tesoro. Para 
                        poder acceder a estos túneles los jugadores deberán encontralos y, para esto, es necesario excavar. Si un jugador 
                        se encuentra en una casilla con túnel, pero no excava, no podrá acceder a este.
                        
                    </p>
                </li>
                <li>
                    <p className='texto'>
                        Una vez que un jugador encuentra el tesoro, el juegador gana y el juego termina.
                    </p>
                </li>
            </ul>
        </div>
        </div>
        <div className='divfoot'>
        <footer>IIC2513Games</footer>
        </div>
        </div>
        </>

    )
}
export default Rules