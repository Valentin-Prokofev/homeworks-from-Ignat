import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from '../../HW7.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, className,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, index) => {
        return <option className={s.option} key={el + "-" + 1} value={el}>{el}</option>
    }) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange,
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalSelectClassName = s.selecct + (className ? "" + className : "")

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
