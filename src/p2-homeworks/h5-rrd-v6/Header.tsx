import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.div}>
            <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>---
            <NavLink to={PATH.JUNIOR}>junior</NavLink>---
            <NavLink to={PATH.JUNIOR_PLUS}>junior-plus</NavLink>
            {/*<NavLink to={"/*"}></NavLink>*/}
        </div>
    )
}

export default Header
