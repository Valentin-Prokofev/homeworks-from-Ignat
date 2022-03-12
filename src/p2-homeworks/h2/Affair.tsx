import React from 'react'
import {AffairType} from "./HW2";
import Affairs from "./Affairs";
import affairs from "./Affairs";
import style from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <>
            <div className={style.flex}>
                <span>{props.affair.name}</span>
                <span>{props.affair.priority}</span>
                <button onClick={deleteCallback}>X</button>
            </div>

        </>
    )
}

export default Affair
