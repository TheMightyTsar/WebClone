import React from 'react'
import '../../assets/styles/tablero.css'
import jsonAct from "../../assets/jsonFile/act.json";

export default function Traps(props){
        console.log(props.pos)
        let posicion = props.pos
        const [x, y] = posicion.split(',');

        let xPos = parseInt(x) + 1;
        let yPos = parseInt(y) + 1;

        return (
            <div className="trampa"  style={{ gridRow: xPos, gridColumn: yPos }}></div>
        )


};