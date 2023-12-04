import React from 'react'
import '../../assets/styles/tablero.css'
import jsonAct from '../../assets/jsonFile/act.json';

const RockImg = "https://res.cloudinary.com/darhaqq0v/image/upload/v1695845331/cornerRock_ghdzae.png";
const RockSandImg = "https://res.cloudinary.com/darhaqq0v/image/upload/v1698957212/status2_yia3jp.png";
const SandImg = "https://res.cloudinary.com/darhaqq0v/image/upload/v1698957212/Tierra_ld9tme.png";
const CornerImg = "https://res.cloudinary.com/darhaqq0v/image/upload/v1695842117/corner-1_1_tmyl6e.png";
const HoleImg = "https://res.cloudinary.com/darhaqq0v/image/upload/v1701398138/tileHole_eqtk93.png";
const GoldImg = "https://res.cloudinary.com/darhaqq0v/image/upload/v1701398138/tileHoleGolds_fecr8a.png";
const ShopImg = "https://res.cloudinary.com/darhaqq0v/image/upload/v1695846601/SHOP_cyyy2a.png";
export default function Tiles(props) {

    let State = props.state

    let TileImg = RockImg;
    if (State === -1){
        TileImg = CornerImg;
    }
    if (State === 3) {
        TileImg = SandImg;
    }
    if (State === 2) {
        TileImg = RockSandImg;
    }
    if (State === 1) {
        TileImg = RockImg;
    }
    if (State === 0) {
        TileImg = HoleImg;
    }
    if (State === -2) {
        TileImg = GoldImg;
    }

    const posY = parseInt(props.pos[2]) + 1;
    const posX = parseInt(props.pos[0]) + 1;




    return (
        <div className="tiles" style={{ backgroundImage: `url(${TileImg})`,
                                        gridRow: posY,
                                        gridColumn: posX
        }} ubicacion={`${props.pos}`}>

        </div>
    );
}
