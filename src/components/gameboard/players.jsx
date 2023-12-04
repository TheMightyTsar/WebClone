import React from 'react'
import '../../assets/styles/tablero.css'
import jsonAct from "../../assets/jsonFile/act.json";

export default function Players(props){
    console.log(props.color)
    let PlayerColor = props.color;

    let Posicion = props.pos

    const [x, y] = Posicion.split(',');

    let xPos = parseInt(x) + 1;
    let yPos = parseInt(y) + 1;


    return (
        <div className={PlayerColor}  style={{ gridRow: xPos, gridColumn: yPos }}></div>
    );
}