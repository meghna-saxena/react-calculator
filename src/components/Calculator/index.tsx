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
    result: number | undefined,
    isOperatorSelected: boolean
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            leftOperand: 0,
            rightOperand: 0,
            operator: '',
            clickCounter: 0,
            result: 0,
            isOperatorSelected: false
        }
    }

    handleUserInput = (event: any) => {
        const value = event;

        // if operator is not selected take all the values
        // setstate as leftoperand

        // // if (!OPERATORS.includes(value) && (this.state.clickCounter < 1)) {
        //     if (!OPERATORS.includes(value) && !this.state.isOperatorSelected) {
        //     // this.setState({ leftOperand: value, clickCounter: this.state.clickCounter + 1 })
        //     this.setState({ leftOperand: (this.state.leftOperand !== 0) ? this.state.leftOperand + value : value })
        // } else if (!OPERATORS.includes(value) && (this.state.clickCounter >= 1)) {
        //     this.setState({ rightOperand: value, clickCounter: this.state.clickCounter + 1 })
        // } else {
        //     this.setState({ operator: value })
        // }



        if (!OPERATORS.includes(value) && !this.state.isOperatorSelected) {
            this.setState({ leftOperand: (this.state.leftOperand !== 0) ? this.state.leftOperand + value : value })
        } else if (!OPERATORS.includes(value) && this.state.isOperatorSelected) {
            this.setState({ rightOperand: (this.state.rightOperand !== 0) ? this.state.rightOperand + value : value })
        } else {
            this.setState({ operator: value, isOperatorSelected: true })
        }


        const { leftOperand, operator, rightOperand } = this.state;

        // console.log('leftOperand, operator, rightOperand', leftOperand, operator, rightOperand)

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
        const { leftOperand, rightOperand, clickCounter, result, operator, isOperatorSelected } = this.state;

        console.log('leftOperand, operator, rightOperand', leftOperand, operator, rightOperand)

        console.log('clickcount', clickCounter)

        // const output = result && result >= 0 ? result : clickCounter <= 1 ? leftOperand : rightOperand;
        const output = result && result >= 0 ? result : !isOperatorSelected ? leftOperand : rightOperand;

        return (
            <div className="calculator">
                <DisplayScreen output={output} />
                <Keypad clicked={this.handleUserInput} />
            </div>
        );
    }
}
