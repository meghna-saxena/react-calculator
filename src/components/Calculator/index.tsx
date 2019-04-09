import * as React from 'react';
import { Keyboard } from '../Keyboard';
import { DisplayScreen } from '../DisplayScreen';

export interface CalculatorProps {
}

export interface CalculatorState {
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <React.Fragment>
                <DisplayScreen />
                <Keyboard />
            </React.Fragment>
        );
    }
}
