import * as React from 'react';
import { Keyboard } from '../Keyboard';
import { DisplayScreen } from '../DisplayScreen';
import { OPERATORS } from '../../constants/globalConstants'
import { getCalculationResult } from '../../helpers'
import './Calculator.css'

export interface CalculatorProps {
}

export interface CalculatorState {
    leftOperand: number | null,
    operator: string,
    rightOperand: number | null,
    clickCounter: number,
    result: number | undefined
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            leftOperand: null,
            rightOperand: null,
            operator: '',
            clickCounter: 0,
            result: 0
        }
    }

    handleUserInput = (e: any) => {
        const value = e;
        console.log('INPUT', value)

        const operators = OPERATORS.map(el => el.symbol);

        if (typeof value === 'string') {
            let bla = [];
            bla.push(value);

            console.log('BLA', bla)
        }


        if (!operators.includes(value) && (this.state.clickCounter < 1)) {
            this.setState({ leftOperand: value, clickCounter: this.state.clickCounter + 1 })
        } else if (!operators.includes(value) && (this.state.clickCounter >= 1)) {
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
        this.setState({ leftOperand: null, rightOperand: null, result: 0, clickCounter: 0 })
    }

    public render() {
        const { leftOperand, rightOperand, clickCounter, result } = this.state;

        const output = result && result >= 0 ? result : clickCounter <= 1 ? leftOperand : rightOperand;

        // console.log('STATE', this.state)
        return (
            <div className="calculator">
                <DisplayScreen output={output} />
                <Keyboard clicked={this.handleUserInput} />
            </div>
        );
    }
}
