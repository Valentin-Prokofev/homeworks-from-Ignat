import React, {ChangeEvent, useState} from 'react';
import {hw13API} from "./api/api";

export const Request = () => {
    let [checked, setChecked] = useState<boolean>(false)

    const onclickButtonHandler = () => {
        hw13API.postSuccess(checked)
            .then((res: any) => {
                console.log(res.data)
            })
            .catch(err => alert(err.message))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <div>
            <button onClick={onclickButtonHandler}>post</button>
            <input
                type="checkbox"
                onChange={onChangeHandler}
                checked={checked}/>
        </div>
    );
};
