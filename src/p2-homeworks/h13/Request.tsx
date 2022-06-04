import React, {useState} from 'react';
import {hw13API} from "./api/api";

export const Request = () => {
    let[checked, setChecked] = useState<boolean>(false)

    const onclickButtonHandler = () => {
        hw13API.postSuccess(false)
            .then((res: any) => {
                console.log(res.data)
                setChecked(true)
            })
            .catch(err=>alert(err.message))
    }

    return (
        <div>
            <button onClick={onclickButtonHandler}>post</button>
            <input
                type="checkbox"
                onChange={()=>setChecked(true)}
                checked={checked}/>
        </div>
    );
};
