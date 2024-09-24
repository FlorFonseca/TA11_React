import React, { useEffect, useState } from 'react';
import './Temporizador.css';

const Temporizador = ()=>{
    const [activo, setActivo] = useState(false);
    const [segundos, setSegundos] = useState(0);

    useEffect(()=>{
        let intervalo;
        if(activo){
            intervalo = setInterval(()=>{
                setSegundos((prev)=> prev+1);
            },1000);
        }
        return ()=> clearInterval(intervalo);

    },[activo]);

    const handlePlay = ()=>{
        setActivo(true);
    }

    const handleReset = ()=>{
        setActivo(false);
        setSegundos(0);
    }

    const handleStop = ()=>{
        setActivo(false);
    }


    return (
        <div className='contenedorTemporizador'>
            <h2 id='titulo'>Temporizador de segundos</h2>
            <div className='display'>
                {segundos}
            </div>
            <div className='botones'>
                <button id='play-btn' onClick={handlePlay}>Play</button>
                <button id='stop-btn' onClick={handleStop}>Stop</button>
                <button id='reset-btn' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Temporizador;