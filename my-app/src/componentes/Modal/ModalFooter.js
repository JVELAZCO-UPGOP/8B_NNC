import React from "react";
import "./ModalFooter.css";

function ModalFooter({
    cambiarModal = ()=>{},
    crearEntidad = ()=>{}
}){
    return(
       <div className="modal-footer">
        <button 
         type="button" 
         className="btn btn-secondary" 
         data-bs-dismiss="modal" 
         onClick={cambiarModal}>Cerrar
         </button>

        <button 
         type="button" 
         className="btn btn-primary"
         data-bs-dismiss="modal" 
         id="btn-guardar" 
         onClick={crearEntidad}
         >Crear
        </button>
       </div>
    );
}

export default ModalFooter;