import React from "react";
import "./Search.css";

function Search(props){
    return(
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className="btn btn-outline-primary">Buscar</button>
      </form>
    )
}

export default Search;