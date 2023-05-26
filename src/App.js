import { useState } from 'react';

import * as math from "mathjs";

import './App.css';
import Button from './components/Button'
import Input from './components/Input'

const App = () => {

    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    //Functions for computations with setText and setResult
    const addToText = (val) => {
        setText((text) => [...text, val + " "]);
    };

    //Calculating results in the "=" using the "mathjs"
    const calcResult = () => {
        const input = text.join(""); //Remove all commas inside our text string

        setResult(math.evaluate(input));
    };

    //For the "C" clear
    const clearText = () => {
        setText("");
        setResult("");
    };

    const buttonColor = "#34495E";
    return ( <
        div className = "App" >
        <
        div className = 'wrapper' >

        <
        Input text = { text }
        result = { result }
        / >

        <
        div className = 'row' >
        <
        Button symbol = "7"
        handleClick = { addToText }
        / > <
        Button symbol = "8"
        handleClick = { addToText }
        / > <
        Button symbol = "9"
        handleClick = { addToText }
        / > <
        Button symbol = "/"
        handleClick = { addToText }
        color = { buttonColor }
        / > < /
        div >

        <
        div className = 'row' >
        <
        Button symbol = "4"
        handleClick = { addToText }
        / > <
        Button symbol = "5"
        handleClick = { addToText }
        / > <
        Button symbol = "6"
        handleClick = { addToText }
        / > <
        Button symbol = "*"
        handleClick = { addToText }
        color = { buttonColor }
        / > < /
        div >

        <
        div className = 'row' >
        <
        Button symbol = "1"
        handleClick = { addToText }
        / > <
        Button symbol = "2"
        handleClick = { addToText }
        / > <
        Button symbol = "3"
        handleClick = { addToText }
        / > <
        Button symbol = "+"
        handleClick = { addToText }
        color = { buttonColor }
        / > < /
        div >

        <
        div className = 'row' >
        <
        Button symbol = "0"
        handleClick = { addToText }
        / > <
        Button symbol = "."
        handleClick = { addToText }
        / > <
        Button symbol = "="
        handleClick = { calcResult }
        / > <
        Button symbol = "-"
        handleClick = { addToText }
        color = { buttonColor }
        / > < /
        div > <
        Button symbol = "C"
        color = "#6E2C00"
        handleClick = { clearText }
        / > < /
        div > <
        /div >
    );
}

export default App;