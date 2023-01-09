import React, { useEffect, useRef, useState } from "react";
import Economy from "./Economy";

const DAY_MS_LEN = 500;

function EconomyDisplay() {
    const economyRef = useRef(null);
    const [currentDay, setCurrentDay] = useState(null);

    // set up economy, and simulate 1 day every DAY_MS_LEN milliseconds
    useEffect(() => {
        economyRef.current = new Economy(1);
        setCurrentDay(0);

        const intervalId = window.setInterval(() => {
            economyRef.current.simulateDay();
            setCurrentDay((day) => day + 1);
        }, DAY_MS_LEN);
        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    if (!economyRef.current) return null;

    const economy = economyRef.current;

    return (
        <div>
            <div>Day: {currentDay}</div>
            {Object.values(economy.pexels).map((pexel) => (
                <div key={pexel.uuid}>
                    {pexel.firstName} {pexel.lastName}, bank acct has{" "}
                    {pexel.bankAccountBalance}
                </div>
            ))}
        </div>
    );
}

export default EconomyDisplay;
