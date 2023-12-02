import React from 'react'
import '../../assets/styles/tablero.css'


export default function Icon(props) {

    let colour = props.color

    let IcImg = 'yellow';
    if (colour == 'yellow'){
        IcImg = 'icon player_yellow';
    }
    if (colour == 'purple'){
        IcImg = 'icon player_purple';
    }
    if (colour == 'brown'){
        IcImg = 'icon player_brown';
    }
    if (colour == 'blue'){
        IcImg = 'icon player_blue';
    }


    return (
        <div className= {IcImg}>
                </div>
    );
}