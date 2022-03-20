import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import style from "./HW3.module.css";
import {v1} from "uuid";


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newName: UserType = {
            _id: v1(),
            name: name
        }
        setUsers([newName, ...users]) // need to fix
        console.log(users)
    }

    return (
        <div className={style.hw3}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
