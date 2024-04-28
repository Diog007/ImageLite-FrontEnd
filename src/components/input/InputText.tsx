import React from "react";

interface InputTextProps {
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string;
    id?: string
}


export const InputText: React.FC<InputTextProps> = ({style, onChange, placeholder, id} : InputTextProps) => {
    return (
        <input type='text' 
                onChange={onChange}
                id={id}
                placeholder={placeholder}
                className={`${style} border px-3 py-2 rounded-lg text-gray-900`} />

    )

}