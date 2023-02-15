import React from 'react'
import { Icon, IIconProps } from '../../atoms/icon/Icon';

export interface IInputProps {
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    label?: React.ReactElement | string;
    disabled?: boolean;
    placeholder?: string;
    extraContent?: React.ReactElement;
    icon?: IIconProps
}

export const Input: React.FC<IInputProps> = ({ id, name, icon, disabled, extraContent, placeholder, onChange, onBlur, onFocus, value, label }) => {
    return (
        <div className={`${disabled ? "opacity-60" : ""}`}>
            {label && <label className='text-xs font-semibold' htmlFor={name}>{label}</label>}
            <div className='border px-2 py-1 mt-1.5 items-center justify-center rounded-md flex'>
                {icon &&
                    <div className={`h-full flex justify-center items-center pr-2`}>
                        <Icon {...icon} />
                    </div>}
                <input
                    className='w-full h-full'
                    placeholder={placeholder}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value} />
                {extraContent && extraContent}
            </div>
        </div>
    )
}
