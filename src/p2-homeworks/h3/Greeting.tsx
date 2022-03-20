import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting = (props: GreetingPropsType) => {
    const inputClass = props.error ? s.error : "" // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <input
                value={props.name}
                onChange={props.setNameCallback}
                onKeyPress={props.onKeyPressHandler}
                className={inputClass}/>
            <span>{props.error}</span>
            <button onClick={props.addUser}>add</button>
            <span>{props.totalUsers}</span>
        </div>
    )
}

export default Greeting
