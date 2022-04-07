import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {
    const [isClick, setIsClick] = useState(false)

    const burgerChange = () => (isClick) ? setIsClick(false) : setIsClick(true)

    return (
        <div className={s.div}>
            <ul className={`${s.ul_navLink} ${isClick ? s.right : s.left}`}>
                <li><NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR}>junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR_PLUS}>junior-plus</NavLink></li>
                <div className={s.square_div} onClick={burgerChange}></div>
            </ul>
            {/*<NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>---*/}
            {/*<NavLink to={PATH.JUNIOR}>junior</NavLink>---*/}
            {/*<NavLink to={PATH.JUNIOR_PLUS}>junior-plus</NavLink>*/}
            {/*<NavLink to={"/*"}></NavLink>*/}
        </div>
    )
}

export default Header
