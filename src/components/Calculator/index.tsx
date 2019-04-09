import * as React from 'react';
import { Keyboard } from '../Keyboard';
import { DisplayScreen } from '../DisplayScreen';
import { OPERATORS } from '../../constants/globalConstants'
import './Calculator.css'

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

        // switch (input) {
        //     case (input === 'AC'):
        //         this.handleReset()
        //         break;
        //     case (operators.includes(input)):
        //         this.setState({
        //             operator: input
        //         });
        //         break;
        //     default:
        //         this.setState({ inputOne: input })
        // }

        // this.handleCalculation(operator, inputOne, inputTwo)
    }

    handleReset() {
       // this.setState = ({ inputOne: null })
    }

    handleCalculation(operator: string, inputOne: number, inputTwo: number) {
        const result = { inputOne, operator, inputTwo };
    }

    public render() {
        const output = this.state.inputOne;

        return (
            <div className="calculator">
                <DisplayScreen output={output} />
                <Keyboard clicked={this.handleUserInput} />
            </div>
        );
    }
}
