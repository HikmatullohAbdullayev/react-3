import React from "react";
import { Modal } from "../modal";
import { Form } from "../form";
import "./card.css"

export const Card = ({ ism, familya, id, setData }) => {
    const  [open, setOpen] = React.useState(false)
    const del = () => {
        setData((p) => p.filter((item) => item.id !== id));
    }
    const openModal = () =>{
        setOpen(true)
    }
    return (
        <>
            <div className="data">
                <h2 className="name">{ism}</h2>
                <h3 className="name2">{familya}</h3>
                <button onClick={del}>del</button>
                <button onClick={openModal}>edit</button>

            </div>
            <Modal isOpen={open} close={setOpen}>
                <Form edit id= {id} close={setOpen} setData={setData} />
            </Modal>


        </>
    )
}