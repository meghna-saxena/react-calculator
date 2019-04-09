import * as React from 'react';
import { Keyboard } from '../Keyboard';
import { DisplayScreen } from '../DisplayScreen';
import { OPERATORS } from '../../constants/globalConstants'
import { getCalculationResult } from '../../helpers'
import './Calculator.css'

export interface CalculatorProps {
}

export interface CalculatorState {
    initialInput: number | null,
    operator: string,
    nextInput: number | null,
    clickCounter: number,
    result: number | undefined
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            initialInput: null,
            nextInput: null,
            operator: '',
            clickCounter: 0,
            result: 0
        }
    }

    handleUserInput = (e: any) => {
        const value = e;
        console.log('INPUT', value)

        const operators = OPERATORS.map(el => el.symbol);

        if (!operators.includes(value) && (this.state.clickCounter < 1)) {
            this.setState({ initialInput: value, clickCounter: this.state.clickCounter + 1 })
        } else if (!operators.includes(value) && (this.state.clickCounter >= 1)) {
            this.setState({ nextInput: value, clickCounter: this.state.clickCounter + 1 })
        } else {
            this.setState({ operator: value })
        }

        const { initialInput, operator, nextInput } = this.state;

        if (value === '=') {
            const result = getCalculationResult(initialInput, operator, nextInput);
            console.log('RESULT', result)

            this.setState({ result: result })
        }


        switch (value) {
            case 'AC':
                this.handleReset()
                break;
            case '=':
                const result = getCalculationResult(initialInput, operator, nextInput);
                console.log('RESULT', result)

                this.setState({ result: result })
                break;
        }
    }

    handleReset() {
        this.setState({ initialInput: null, nextInput: null, result: 0, clickCounter: 0 })
    }

    public render() {
        const { initialInput, nextInput, clickCounter, result } = this.state;

        const output = result && result >= 0 ? result : clickCounter <= 1 ? initialInput : nextInput;

        console.log('STATE', this.state)
        return (
            <div className="calculator">
                <DisplayScreen output={output} />
                <Keyboard clicked={this.handleUserInput} />
            </div>
        );
    }
}
