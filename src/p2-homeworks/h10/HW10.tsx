import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from "./HW10.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

export function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state=>state.loading.isLoading)
    let dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log('loading...')
    };

    return (
        <div className={style.hw10}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={style.lds_heart}><div></div></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

