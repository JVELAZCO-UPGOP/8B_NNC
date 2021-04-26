import React from "react";
import "./Select.css";

function Select({
    options=[],
    nombreCampo = "vacio",
    onChange=()=>{},
    placeHolder,
    value="",
}){
    return(
        <select 
         id={nombreCampo}
         className="form-select"
         aria-label="Default select example"
         onChange={onChange} 
         name={nombreCampo}
         defaultValue={value}
         >
            <option value = "">Seleccione {placeHolder}</option>
            {options.map(({valor,etiqueta}, index)=>(
              <option 
              key={`${nombreCampo}-${index}-${valor}-${etiqueta}`} 
              value = {valor}>
              {etiqueta}
              </option>))}
        </select>
    );
}

export default Select