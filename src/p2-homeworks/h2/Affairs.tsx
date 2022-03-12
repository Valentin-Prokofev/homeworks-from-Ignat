import React, {SetStateAction} from 'react'
import style from "./Affairs.module.css";
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filterType:FilterType)=>void
    deleteAffairCallback: (_id: number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div className={style.flex_button}>
            {mappedAffairs}

            <button onClick={()=>props.setFilter("all")}>All</button>
            <button onClick={()=>props.setFilter("high")}>High</button>
            <button onClick={()=>props.setFilter("middle")}>Middle</button>
            <button onClick={()=>props.setFilter("low")}>Low</button>
        </div>
    )
}

export default Affairs
