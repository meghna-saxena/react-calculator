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
    result: number,
    isOperatorSelected: boolean
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            leftOperand: 0,
            rightOperand: 0,
            operator: '',
            result: 0,
            isOperatorSelected: false
        }
    }

    handleUserInput = (event: any) => {
        const value = event;
        const { leftOperand, rightOperand, operator, isOperatorSelected } = this.state;

        if (!OPERATORS.includes(value) && !isOperatorSelected) {
            this.setState({ leftOperand: (leftOperand !== 0) ? leftOperand + value : value })
        } else if (!OPERATORS.includes(value) && isOperatorSelected) {
            this.setState({ rightOperand: (rightOperand !== 0) ? rightOperand + value : value })
        } else {
            this.setState({ operator: value, isOperatorSelected: true })
        }

        this.handleResultOutput(value)
    }

    handleResultOutput = (value: string) => {
        const { leftOperand, rightOperand, operator } = this.state;

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
            result: 0
        })
    }

    public render() {
        const { leftOperand, rightOperand, result, operator, isOperatorSelected } = this.state;

        console.log('leftOperand, operator, rightOperand', leftOperand, operator, rightOperand)

        const output = result && result >= 0 ? result : !isOperatorSelected ? leftOperand : rightOperand;

        return (
            <div className="calculator">
                <DisplayScreen output={output} />
                <Keypad clicked={this.handleUserInput} />
            </div>
        );
    }
}
