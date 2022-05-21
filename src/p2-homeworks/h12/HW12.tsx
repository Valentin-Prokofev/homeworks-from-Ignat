import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "../h10/bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    console.log(theme)

    const dispatch = useDispatch()

    const onChangeOption = (valueTheme: string) => {
        dispatch(changeThemeAC(valueTheme))
    }
    // useDispatch, onChangeCallback


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
                <SuperSelect
                    options={themes}
                    onChangeOption={onChangeOption}
                    // value={themes}
                />
            <hr/>
        </div>
    );
}

export default HW12;
