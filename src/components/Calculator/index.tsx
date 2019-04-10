import * as React from 'react';
import { Keypad } from '../Keypad';
import { DisplayScreen } from '../DisplayScreen';
import { OPERATORS } from '../../constants/globalConstants'
import { getCalculationResult } from '../../helpers'
import './Calculator.css'

export interface CalculatorProps {
}

export interface CalculatorState {
    leftOperand: number,
    operator: string,
    rightOperand: number,
    clickCounter: number,
    result: number | undefined
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            leftOperand: 0,
            rightOperand: 0,
            operator: '',
            clickCounter: 0,
            result: 0
        }
    }

    handleUserInput = (event: any) => {
        const value = event;
        console.log('INPUT', value)

        let bla = [];
        bla.push(value);

        console.log('BLA', bla)


        if (!OPERATORS.includes(value) && (this.state.clickCounter < 1)) {
            this.setState({ leftOperand: value, clickCounter: this.state.clickCounter + 1 })
        } else if (!OPERATORS.includes(value) && (this.state.clickCounter >= 1)) {
            this.setState({ rightOperand: value, clickCounter: this.state.clickCounter + 1 })
        } else {
            this.setState({ operator: value })
        }

        const { leftOperand, operator, rightOperand } = this.state;

        switch (value) {
            case 'AC':
                this.handleReset()
                break;
            case '=':
                const result = getCalculationResult(leftOperand, operator, rightOperand);
                this.setState({ result: result })
                break;
        }
    }

    handleReset() {
        this.setState({
            leftOperand: 0,
            rightOperand: 0,
            result: 0,
            clickCounter: 0
        })
    }

    public render() {
        const { leftOperand, rightOperand, clickCounter, result } = this.state;

        const output = result && result >= 0 ? result : clickCounter <= 1 ? leftOperand : rightOperand;

        return (
            <div className="calculator">
                <DisplayScreen output={output} />
                <Keypad clicked={this.handleUserInput} />
            </div>
        );
    }
}
