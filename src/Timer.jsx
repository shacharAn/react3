    import { useEffect, useState } from "react";
    
    export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        console.log("Timer Started");
    
        const intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
        }, 1000);
    
        return () => {
        clearInterval(intervalId);
        console.log("Stopped Timer");
        };
    }, []);
    
    return (
    <div>
    <p>Seconds: {seconds}</p>
    </div>
    );
    }