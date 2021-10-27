import { ChangeEvent, FC } from 'react';
import input from './scss/Input.module.scss';

interface IInputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

const Input: FC<IInputProps> = props => {
    const { type, name, value, onChange, disabled } = props;

    return (
        <input
            type={type}
            name={name}
            value={value}
            className={input.base}
            onChange={e => onChange(e)}
            disabled={disabled}
        />
    );
};

export default Input;