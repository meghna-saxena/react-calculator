import * as React from 'react';
import { Keys } from './Keys'
import { DIGITS, OPERATORS } from '../../constants/globalConstants';
import './Keyboard.css';

export interface KeyboardProps {
}

export interface KeyboardState {
}


export class Keyboard extends React.Component<KeyboardProps, KeyboardState> {
    constructor(props: KeyboardProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const digits = DIGITS.map(element => {
            return <Keys key={element} content={element} />
        });

        console.log('digits', digits)
        return (
            <div className="keyboard">
                {digits}
            </div>
        );
    }
}
