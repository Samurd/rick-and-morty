import axios from "axios";
import { useState, useEffect } from "react";

export function ResidentInfo({link}) {

    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(link)
        .then(res => setResident(res.data))
        .catch(error => console.error(error))
    }, []);


    const statusResi = () => {
        if(resident.status === "Alive") {
            return "rgb(49, 255, 30)"
        } else if (resident.status === "Dead") {
            return "red"
        } else {
            return "gray"
        }
    }
    
    return(
        <div className="container-card">
            <div className="container-status">
                <span style={{
                    background: `${statusResi()}`
                }}></span>
                <h3>{resident.status}</h3>
            </div>
            <img src={resident?.image} alt="" />
            <div className="container-name">
            <h2>{resident?.name}</h2>
            </div>
            <div className="container-info">
            <h4>Species:</h4>
            <h3>{resident?.species}</h3>
            <h4>Origin:</h4>
            <h3>{resident.origin?.name}</h3>
            <h4>Apariciones:</h4>
            <h3>{resident.episode?.length}</h3>
            </div>
        </div>
    )
}