import * as React from 'react';
import { Keyboard } from '../Keyboard';
import { DisplayScreen } from '../DisplayScreen';

export interface CalculatorProps {
}

export interface CalculatorState {
    input: string
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            input: ''
        }
    }

    handleUserInput = (e: any) => {
        const input = e;
        console.log('INPUT', input)

        this.setState({ input })
    }

    public render() {
        return (
            <React.Fragment>
                <DisplayScreen />
                <Keyboard clicked={this.handleUserInput} />
            </React.Fragment>
        );
    }
}
