import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";

const Chronometer = () => {
    const [seconds, setSeconds] = useState(0);
    
    const handleStart = () => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearImmediate(interval);
    }
        
    useEffect(() => {
        
    }, [])
    

    return <div>
        {seconds}<br></br>
        <Button variant="contained" color="primary" onClick={handleStart}>
            Start
        </Button>
        <Button variant="contained" color="secondary">
            Pause
        </Button>
        <Button variant="contained">
            Reset
        </Button>
        </div>
    
}


export default Chronometer;