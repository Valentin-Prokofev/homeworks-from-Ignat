import React from 'react'
import style from "./Message.module.css"

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <>
            <section className={style.user}>
                <img className={style.user_avatar} src={props.avatar} alt="user avatar"/>
                <div className={style.user_date}>
                    <p className={style.user_name}>{props.name}</p>
                    <p className={style.user_message}>{props.message}</p>
                    <p className={style.user_message_time}>{props.time}</p>
                </div>
            </section>
        </>
    )
}

