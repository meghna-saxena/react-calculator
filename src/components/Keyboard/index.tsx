import * as React from 'react';
import { Keys } from './Keys'
import { SYMBOLS} from '../../constants/globalConstants';
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
        const digits = SYMBOLS.map(symbol => {
            return <Keys key={symbol.symbol} content={symbol.symbol} />
        });

        console.log('digits', digits)
        return (
            <div className="keyboard">
                {digits}
            </div>
        );
    }
}
