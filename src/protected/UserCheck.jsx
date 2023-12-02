import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";


function CheckUser(){
    const {token} = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const config = {
        'method': 'get',
        'url': `${import.meta.env.VITE_BACKEND_URL}/example/protecteduser`,
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    };

    useEffect(() => {
        axios(config).then((response) => {
            console.log('Token válido')
            setMsg(response.data.message);
        }).catch((error) => {
            console.log('Token expiró')
            console.log(error)
            setMsg(error.message);
        })
    }, [])
    return (msg)
}

export default CheckUser;
