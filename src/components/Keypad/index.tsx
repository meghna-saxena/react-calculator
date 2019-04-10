import * as React from 'react';
import { Keys } from './Keys'
import { SYMBOLS } from '../../constants/globalConstants';
import './Keypad.css';

export interface KeypadProps {
    clicked: Function
}

export interface KeypadState {
}

export class Keypad extends React.Component<KeypadProps, KeypadState> {
    constructor(props: KeypadProps) {
        super(props);

        this.state = {
        }
    }

    handleClick = (event: string | number) => {
        const { clicked } = this.props;

        clicked(event)
    }

    public render() {
        const digits = SYMBOLS.map(item => {
            return <Keys key={item.symbol} symbol={item.symbol} clicked={(e: string | number) => this.handleClick(e)} />
        });

        return (
            <div className="keypad">
                {digits}
            </div>
        );
    }
}
