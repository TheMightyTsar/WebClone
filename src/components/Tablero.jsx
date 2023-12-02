import React from 'react'
import '../assets/styles/tablero.css'
import Tiles from "./gameboard/tiles.jsx";
import Players from "./gameboard/players.jsx";
import Traps from "./gameboard/traps.jsx";
import tilesJson from '../assets/jsonFile/tiles.json';
import playersJson from '../assets/jsonFile/players.json';
import actualizations from '../assets/jsonFile/act.json'

const yLength = 8;
const xLenght = 8;

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function Tablero() {





    const Start = () =>{
        const { token } = useContext(AuthContext);
        const [player, setPlayer] = useState({});
        const [trampa, setTrampa] = useState({});
        const [tipoTrampa, setTipoTrampa] = useState("");
        const [tiles, setTiles] = useState({});
        const [msg, setMsg] = useState("");
        const [jugador, setJugador] = useState({});
        const [code, setCode] = useState('');
        const [dado, setDado] = useState({});
        const [color, setColor] = useState({});
        const [trap, setTrap] = useState({});

        var icon = 0

        // Hacemos la request inicial en el primer render
        useEffect(() => {
            const config = {
                'method': 'get',
                'url': `${import.meta.env.VITE_BACKEND_URL}/boardData`,
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            };
            console.log(`Haciendo el request a ${import.meta.env.VITE_BACKEND_URL}/boardData`);

            axios(config).then((response) => {
                const data = response.data.board;
                const characters = {};
                data.Players.map((player) => {
                    characters[player.id] = player;
                    if (player.color ==  response.data.color){
                        setJugador({player})
                    }
                });

                setPlayer(characters);
                setCode(data.code)
                const tiles = {};
                data.Casillas.map((tile) => {
                    tiles[tile.id] = tile;
                });

                setTiles(tiles);
                if (response.data.color == 'yellow'){
                    icon = 'icon player_yellow'
                }
                if (response.data.color == 'blue'){
                    icon = 'icon player_blue'
                }
                if (response.data.color == 'purple'){
                    icon = 'icon player_purple'
                }
                if (response.data.color == 'brown'){
                    icon = 'icon player_brown'
                }
                icon = response.data.color
                setColor({icon})

            })
                .catch((error) => {
                    console.log(error);
                });
        }, [])

        const Dado = () => {
            const config = {
                'method': 'get',
                'url': `${import.meta.env.VITE_BACKEND_URL}/game/move`,
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            };
            axios(config).then((response) => {
                if (response.request.status == 200){
                    setMsg(response.data.data)
                    let da = response.data.dado
                    setDado({da});
                    setTimeout(() => {
                        setDado({'dado': ''});
                    }, 7000);
                }else{
                    const data = response.data.board;
                    const characters = {};
                    data.Players.map((player) => {
                        characters[player.id] = player;
                        if (player.color ==  response.data.color){
                            setJugador({player})
                        }
                        if (player.idTrap ==  response.data.color){

                        }
                    });
                    setPlayer(characters);
                    let dad = response.data.dado
                    setDado({dad});
                    setTimeout(() => {
                        setDado({'dado': ''});
                    }, 7000);    }
            })
                .catch((error) => {
                    setMsg(error.response.data)
                });
        }
        const config = {
            'method': 'get',
            'url': `${import.meta.env.VITE_BACKEND_URL}/game/start`,
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        };

        axios(config).then((response) => {
            setMsg(response.data);

        })
            .catch((error) => {
                setMsg(error.response.data)
            });
    }


    const Trampa = () => {
        const config = {
            'method': 'post',
            'url': `${import.meta.env.VITE_BACKEND_URL}/game/trap`,
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        };
        axios(config).then((response) => {
            setMsg(response.data.data);
            const det = response.data.casilla
            //const trap = response.data.trap;
            //const trapType = response.data.tipo;
            //console.log(response.data.board.Casillas)
            //setTrampa({trap});
            //setTipoTrampa({trapType});

            setTrap({det});
        })
            .catch((error) => {
                console.log(error)


            });
    }

    const Dig = () => {
        // idGame, idJugador, idCasilla
        const config = {
            'method': 'get',
            'url': `${import.meta.env.VITE_BACKEND_URL}/game/dig`,

            'headers': {
                'Authorization': `Bearer ${token}`
            }
        };
        axios(config).then((response) => {

            console.log(response)
            if (response.request.status == 200){
                setMsg(response.data.data)
                console.log(response.data)
                tiles.map((cas) => {
                    if (response.data.pos === cas.pos)
                    {
                        cas.status = response.data.state;
                    }});


                setTimeout(() => {

                }, 7000);
            }else{
            }
        })
            .catch((error) => {
                console.log(error)
                console.log(error.response.data);
                setMsg(error.response.data)
            });


    }


    return(
        <GameContext.Provider>

            {msg.length > 0 && <div className="successMsg"> {msg} </div>}
            <div className='cuerpo'>
                <div id="tablero">
                    traps
                    {Object.values(player).map(p =>
                        (
                            <Players
                                color={p.color}
                                pos={p.pos}
                            />
                        )
                    )}
                    {Object.values(tiles).map(item => (
                            <Tiles
                                key={item.pos}
                                pos={item.pos}
                                state={item.status}
                            />
                        )
                    )}
                    {Object.values(trap).map(tt => (
                            <Traps
                                pos={tt}
                            />
                        )
                    )}


                </div>
                <div className='divBar'>
                    <p className='codigo'>Código: {code}</p>
                    <p className='icon start' onClick={Start}>Start</p>

                </div>

                <div className="gamebar">
                    {Object.values(color).map(c =>
                        (
                            <Icon
                                color={c}
                            />))}

                    <div className="energy_holder">
                        <div className="armor-list">
                            <div className="icon energy"></div>
                            {Object.values(jugador).map(j =>
                                (
                                    <Value
                                        valor={j.energy}
                                    />))}
                        </div>
                        <div className="armor-list">
                            <div className='icon coin'></div>
                            {Object.values(jugador).map(j =>
                                (
                                    <Value
                                        valor={j.money}
                                    />))}
                        </div>

                    </div>
                    <div className="inventory">
                        <div className="armor-list">
                            <div className="icon potion"></div>
                            <div className="icon potion"></div>
                            <div className="icon potion"></div>
                            <div className='icon traps' onClick={Trampa}></div>

                        </div>

                        <div className="consumables">
                            <div className="icon potion"></div>
                            <div className="icon potion"></div>
                            <div className="icon potion"></div>

                        </div>
                    </div>

                    <div></div>

                    <div className='armor-list'>
                        {Object.values(dado).map(d =>
                            (
                                <Value
                                    valor={d}
                                />))}
                        <div className="icon dados" onClick={Dado}></div>

                    </div>
                    <div className="icon dig" ></div>



                </div>
            </div>

        </GameContext.Provider>
    )
}


export default Tablero


