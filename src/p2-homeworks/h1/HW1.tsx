import React from 'react'
import {Message} from "./Message";




const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '20:00',
}

const HW1 = () => {
    return (
        <>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </>
    )
}

export default HW1
