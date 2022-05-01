import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    console.log(typeof( new Date()))

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()                                          //при старте останавливаем предыдущий таймер если он был запущен
        const id: number = window.setInterval(() => {   //
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toDateString()  // fix with date

    return (
        <div>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}

                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
