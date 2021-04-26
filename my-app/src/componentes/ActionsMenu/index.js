import React, { useState } from "react";
import './ActionsMenu.css'
import Alert from '../Alert/index';

function ActionMenu({cambiarModal=()=>{}, titulo}){
    return (
        <div className="actions-menu">
            <h3>{titulo}</h3>
            <div className="actions-menu-content"> 
                <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
                onClick= { cambiarModal }>
                    Nuevo
                </button>
            </div>
        </div>
    );
}

export default ActionMenu;