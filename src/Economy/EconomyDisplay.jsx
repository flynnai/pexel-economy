import React, { useEffect, useRef, useState } from "react";
import Economy from "./Economy";

const DAY_MS_LEN = 1000;

function EconomyDisplay() {
    const economyRef = useRef(null);
    const [_, setArtificialUpdate] = useState(0);

    // set up economy, and simulate 1 day every DAY_MS_LEN milliseconds
    useEffect(() => {
        economyRef.current = new Economy(1);
        setArtificialUpdate(Date.now());

        const intervalId = window.setInterval(() => {
            economyRef.current.simulateDay();
            setArtificialUpdate(Date.now());
        }, DAY_MS_LEN);
        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    if (!economyRef.current) return null;

    const economy = economyRef.current;

    return (
        <div>
            {economy.pexels.map((pexel) => (
                <div>
                    {pexel.firstName} {pexel.lastName}
                </div>
            ))}
        </div>
    );
}

export default EconomyDisplay;
