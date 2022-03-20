import React, {KeyboardEvent, ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer = (props: GreetingContainerPropsType) => {
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
            setName(e.currentTarget.value)
         // need to fix
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser();
        }
    }

    const addUser = () => {
        setError("")
        if(name !== "") {
            props.addUserCallback(name)
            alert(`Hello ${name} !`) // need to fix
            setName("")
        }else {
            alert("error")
            setError("Error")
        }
    }

    const totalUsers = props.users.length

    return (

        <div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
                onKeyPressHandler={onKeyPressHandler}
            />
        </div>
    )
}

export default GreetingContainer
