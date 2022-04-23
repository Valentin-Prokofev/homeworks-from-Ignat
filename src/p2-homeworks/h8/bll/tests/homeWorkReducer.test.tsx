// import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType> // need to fix any V

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-BY-NAME', payload: 'up'})

    console.log(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
    expect(newState[5].name).toBe('Кот')
    expect(newState.length).toBe(6)

})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-BY-NAME-REVERS', payload: 'down'})

    console.log(newState)
    expect(newState[0].name).toBe('Кот')
    expect(newState[1].name).toBe('Коля')
    expect(newState[5].name).toBe('Александр')
    expect(newState.length).toBe(6)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK-MAJORITY', payload: 18})

    expect(newState.length).toBe(4)
})
