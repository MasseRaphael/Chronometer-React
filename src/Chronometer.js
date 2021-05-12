import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        temps: {
            fontSize: 48,
            fontFamily: 'sans-serif',
        },
        millisecondes:{
            fontSize: 24,
            fontFamily: 'sans-serif',
        },
    })
);

const Chronometer = () => {
    const [milliseconds, setMilliseconds] = useState(0);
    const [isItStart, setIsItStart] = useState(false);
    const classes = useStyle();

    function handleStart() {
        setIsItStart(true);
    }

    function handlePause() {
        setIsItStart(false);
    }

    function handleReset() {
        setMilliseconds(0);
        setIsItStart(false);
    }
    
        
    useEffect(() => {
        let interval = null;
        if (isItStart) {
            interval = setInterval(() => {
                setMilliseconds(milliseconds => milliseconds + 10);
            }, 10);
        } else if (!isItStart && milliseconds !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isItStart, milliseconds]);
    

    return <div>
        <span className={classes.temps}>{("0" + Math.floor((milliseconds / 3600000) % 3600)).slice(-2)}:</span>
        <span className={classes.temps}>{("0" + Math.floor((milliseconds / 60000) % 60)).slice(-2)}:</span>
        <span className={classes.temps}>{("0" + Math.floor((milliseconds / 1000) % 60)).slice(-2)}.</span>
        <span className={classes.millisecondes}>{("0" + Math.floor((milliseconds / 10) % 100)).slice(-2)}</span><br></br>
        <Button variant="contained" color="primary" onClick={handleStart}>
            Start
        </Button>
        <Button variant="contained" color="secondary" onClick={handlePause}>
            Pause
        </Button>
        <Button variant="contained" onClick={handleReset}>
            Reset
        </Button>
        </div>
    
}


export default Chronometer;