import * as React from 'react';
import { Keyboard } from '../Keyboard';
import { DisplayScreen } from '../DisplayScreen';
import { OPERATORS } from '../../constants/globalConstants'

export interface CalculatorProps {
}

export interface CalculatorState {
    inputOne: number | null,
    operator: string,
    inputTwo: number | null,
    clickCounter: number
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            inputOne: null,
            inputTwo: null,
            operator: '',
            clickCounter: 0
        }
    }

    handleUserInput = (e: any) => {
        const input = e;
        console.log('INPUT', input)

        const operators = OPERATORS.map(el => el.symbol);

        if (operators.includes(input)) {
            this.setState({
                operator: input
            })
        } else {
            this.setState({ inputOne: input })
        }

       // this.handleCalculation(operator, inputOne, inputTwo)
    }

    handleCalculation(operator: string, inputOne: number, inputTwo: number) {

    }

    public render() {
        const output = this.state.inputOne;

        return (
            <React.Fragment>
                <DisplayScreen output={output} />
                <Keyboard clicked={this.handleUserInput} />
            </React.Fragment>
        );
    }
}
