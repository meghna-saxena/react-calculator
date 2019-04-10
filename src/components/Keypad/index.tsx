import * as React from 'react';
import { Keys } from './Keys'
import { SYMBOLS } from '../../constants/globalConstants';
import './Keypad.css';

export interface KeypadProps {
    clicked: Function
}

export function Keypad(props: KeypadProps) {
    const handleClick = (event: string) => {
        const { clicked } = props;

        clicked(event);
    }

    const digits = SYMBOLS.map(item => {
        return <Keys key={item.symbol} symbol={item.symbol} clicked={(e: string) => handleClick(e)} />
    });

    return (
        <div className="keypad">
            {digits}
        </div>
    );
}



