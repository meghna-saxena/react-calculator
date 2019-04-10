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
    isOperatorSelected: boolean
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            leftOperand: 0,
            rightOperand: 0,
            operator: '',
            isOperatorSelected: false
        }
    }

    handleUserInput = (event: any) => {
        const value = event;
        const { leftOperand, rightOperand, isOperatorSelected } = this.state;

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
                this.setState({ leftOperand: result, rightOperand: 0 })
                break;
        }
    }

    handleReset() {
        this.setState({
            leftOperand: 0,
            rightOperand: 0
        })
    }

    public render() {
        const { leftOperand, rightOperand } = this.state;

        const output = leftOperand >= 0 && rightOperand <= 0 ? leftOperand : rightOperand;

        return (
            <div className="calculator">
                <DisplayScreen output={output} />
                <Keypad clicked={this.handleUserInput} />
            </div>
        );
    }
}
