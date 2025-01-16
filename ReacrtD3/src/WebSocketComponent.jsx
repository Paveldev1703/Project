import React, { useEffect, useState } from 'react';

export const WebSocketComponent = () => {
    useEffect(() => {
        const socket = new WebSocket('wss://exaple.com/socket');

        socket.onmessage = (event) => {
            console.log("Melding mottatt: ", event.data);

        };
        //Rydd opp ved demontering
        return () => {
            socket.close();
            console.log("Socket lukket");
        };
    }, []); // Kjør en gang.

    return <div> WebSocket er tilkoblet! </div>

};  