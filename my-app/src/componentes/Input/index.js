import React from "react";
import "./Input.css";

function Input({
    tipo ="texto",
    nombreCampo,
    onInput = () =>{},
    placeHolder,
    value="",
}){
    return(
        <input 
        type={tipo}
        name={nombreCampo} 
        className="form-control" 
        placeholder={placeHolder}
        onInput={onInput}
        defaultValue={value}/>
    );
}

export default Input
