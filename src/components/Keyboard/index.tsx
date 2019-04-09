import * as React from 'react';
import { Keys } from './Keys'
import { SYMBOLS } from '../../constants/globalConstants';
import './Keyboard.css';

export interface KeyboardProps {
    clicked: any
}

export interface KeyboardState {
}

export class Keyboard extends React.Component<KeyboardProps, KeyboardState> {
    constructor(props: KeyboardProps) {
        super(props);

        this.state = {
        }
    }

    handleClick = (e: any) => {
        const { clicked } = this.props;
        clicked(e)
    }

    public render() {
        const digits = SYMBOLS.map(item => {
            return <Keys key={item.symbol} symbol={item.symbol} clicked={(e: any) => this.handleClick(e)} />
        });

        return (
            <div className="keyboard">
                {digits}
            </div>
        );
    }
}
