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

        //  if(e.currentTarget.value.trim()!=='') {
        //     setName(e.currentTarget.value)
        //     setError('')
        // }else setName("")

        const trimName = e.currentTarget.value.trim()
        console.log(trimName)
        if (trimName && trimName !== "") {
            setName(trimName)
             setError("")
        } else {
            setName("")
            setError("Name is require!")
        }
        // need to fix
    }

    const addUser = () => {
        if (name) {
            props.addUserCallback(name)
            alert(`Hello ${name} !`) // need to fix
            setName("")
            setError('')
        } else {
            setError("Name is require!")
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser();
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
