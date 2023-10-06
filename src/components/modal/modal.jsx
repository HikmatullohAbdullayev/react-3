import React from "react"
import "./modal.css"
export const Modal = ({children ,close , isOpen }) =>{
   
   
    if (!isOpen) {
        return null;
    }

    return(
    <div className="modal">
    <div className="modal_content">
    <button onClick={() => close(false)}>yopish</button>
        {children}
    </div>
    </div>


    )
}