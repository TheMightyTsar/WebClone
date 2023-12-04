import React from 'react'
import '../../assets/styles/tablero.css'

export default function Value(props){
    let energy = props.valor;


    return (
        <div className='divEnergy'>{energy}</div>

        );
}