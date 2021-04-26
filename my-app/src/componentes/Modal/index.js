import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import "./Modal.css";

function Modal({ 
    cambiarModal =()=>{},
    crearEntidad = () =>{},
    children=[], 
}){
    return(
        <>
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader cambiarModal = { cambiarModal }/>
                    <div className="modal-body">
                        <form id="form">
                            <div className="row">
                                <div className="col">
                                  {children}
                                </div>
                            </div>
                        </form>
                    </div>

                    <ModalFooter 
                      cambiarModal = { cambiarModal }
                      crearEntidad = { crearEntidad }/>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade show"></div>
        </>
    );
}

export default Modal