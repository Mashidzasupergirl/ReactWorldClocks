import React, { useState, useEffect } from 'react'



const Clock = () => {
    const [StockholmClockState, setStockholmClockState] = useState()
    const [SaoPauloClockState, setSaoPauloClockState] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            // console.log(date.toLocaleTimeString('it-IT', {timeZone: "America/Sao_Paulo"}))
            setSaoPauloClockState(date.toLocaleTimeString('it-IT', {timeZone: "America/Sao_Paulo"}))
        }, 1000);
    }, [])

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setStockholmClockState(date.toLocaleTimeString())
        }, 1000);
    }, [])
    
return <><h1>{StockholmClockState}</h1><h2>Stockholm</h2>
<h1>{SaoPauloClockState}</h1><h2>Sao Paulo</h2></>
}

export default Clock