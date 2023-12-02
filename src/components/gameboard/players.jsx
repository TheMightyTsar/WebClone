import React from 'react'
import '../../assets/styles/tablero.css'
import jsonAct from "../../assets/jsonFile/act.json";

export default function Players(props){
    let PlayerColor = "yellow";

    let Posicion = "0,0"
    jsonAct.forEach(act => {
        if (act.tipo === "player" && act.player === props.color) {
            Posicion = act.pos;
        }
    });

    const [x, y] = Posicion.split(',');

    let xPos = parseInt(x) + 1;
    let yPos = parseInt(y) + 1;


    if (props.color === "yellow"){
        PlayerColor = "yellow"
    }
    if (props.color === "brown"){
        PlayerColor = "brown"
    }
    if (props.color === "purple"){
        PlayerColor = "purple"
    }
    if (props.color === "blue"){
        PlayerColor = "blue"
    }


    return (
        <div className={PlayerColor}  style={{ gridRow: xPos, gridColumn: yPos }}></div>
    );
}