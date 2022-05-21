// // import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
// // // import {Slider} from "@material-ui/core";
// // import Slider from '@mui/material/Slider';
// //
// //
// // // тип пропсов обычного инпута
// // type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// //
// // type SuperDoubleRangePropsType = DefaultInputPropsType & {
// //     onChangeRange?: (value: [number, number] | number[]) => void
// //     // onChangeRange?: (value1: number) => void
// //     value?: [number, number]
// //     // value?: number
// //     // min, max, step, disable, ...
// // }
// //
// // const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
// //     {
// //          onChangeRange,
// //          value,
// //
// //         ...restProps// все остальные пропсы попадут в объект restProps
// //     }
// // ) => {
// //     const [range, setRange] = useState<number[]>(value ? value : [0, 100]);
// //
// //     // сделать самому, можно подключать библиотеки
// //
// //     // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
// //     //     onChange && onChange(e) // сохраняем старую функциональность
// //     //
// //     //     onChangeRange && onChangeRange(+e.currentTarget.value)
// //     // }
// //
// //     // const handleChange = (event: Event, newValue: number | number[]) => {
// //     //     // setValue(newValue as number[]);
// //     //     //     onChange && onChange(e) // сохраняем старую функциональность
// //     //
// //     //         onChangeRange && onChangeRange(newValue as [number, number])
// //     // };
// //
// //     const handleChange = (event: Event, newRange: number | number[], activeThumb: number
// //     ) => {
// //         setRange(newRange as number[]);
// //         onChangeCallback(newRange as number[])
// //     }
// //
// //     const onChangeCallback = (arr: number[]) => {
// //         onChangeRange && onChangeRange(arr)
// //     }
// //
// //
// //     return (
// //         <>
// //             <Slider
// //                 getAriaLabel={() => 'Simple range'}
// //                 value={value ? value : range}
// //                 onChange={handleChange}
// //                 valueLabelDisplay="auto"
// //                 sx={{color: 'success.main'}}
// //                 {...restProps}/>
// //
// //             {/*<Slider*/}
// //             {/*    getAriaLabel={() => 'Simple range'}*/}
// //             {/*    value={value}*/}
// //             {/*    onChange={handleChange}*/}
// //             {/*    valueLabelDisplay="auto"*/}
// //             {/*    {...restProps}*/}
// //             {/*    // getAriaValueText={valuetext}*/}
// //             {/*/>*/}
// //             {/*/!*DoubleRange*!/*/}
// //             {/*<input*/}
// //             {/*    type={'range'}*/}
// //             {/*    onChange={onChangeCallback}*/}
// //             {/*    // className={finalRangeClassName}*/}
// //
// //             {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
// //             {/*/>*/}
// //
// //
// //
// //         </>
// //     )
// // }
// //
// // export default SuperDoubleRange
//
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import {InputHTMLAttributes} from "react";
//
//
// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// //
// type SuperDoubleRangePropsType = DefaultInputPropsType & {
//     onChangeRange?: (value: [number, number] | number[]) => void
//     // onChangeRange?: (value1: number) => void
//     value?: [number, number]
//     // value?: number
//     // min, max, step, disable, ...
// }
//
// export default function RangeSlider() {
//     const [value, setValue] = React.useState<number[]>([20, 37]);
//
//     const handleChange = (event: Event, newValue: number | number[]) => {
//         setValue(newValue as number[]);
//     };
//
//     return (
//         <Box sx={{ width: 300 }}>
//             <Slider
//                 getAriaLabel={() => 'Temperature range'}
//                 value={value}
//                 onChange={handleChange}
//                 valueLabelDisplay="auto"
//                 // getAriaValueText={valuetext}
//             />
//         </Box>
//     );
// }
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type AlternativeSuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number] | number[]) => void
    value?: [number, number]
}

export const SuperDoubleRange: React.FC<AlternativeSuperDoubleRangePropsType> = ({
                                                                                                onChangeRange,
                                                                                                value,
                                                                                                ...restProps
                                                                                            }) => {

    const [range, setRange] = useState<number[]>(value ? value : [0, 100]);

    const handleChange = (event: Event, newRange: number | number[]) => {
        setRange(newRange as number[]);
        onChangeCallback(newRange as number[])
    }

    const onChangeCallback = (arr: number[]) => {
        onChangeRange && onChangeRange(arr)
    }

    return (
        <Box sx={{width: 285, display: 'inline-block', margin: '0 10px 0 10px'}}>
            <Slider
                getAriaLabel={() => 'My range'}
                value={value ? value : range}
                onChange={handleChange}
                valueLabelDisplay="auto"
                sx={{color: 'success.main'}}
                {...restProps}/>
        </Box>
    )
}