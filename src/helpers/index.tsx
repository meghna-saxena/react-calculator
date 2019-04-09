export const getCalculationResult = (inputOne: number | null, operator: string, inputTwo: number | null) => {
    switch (operator) {
        case '+':
            if (inputOne && inputTwo)
            return Number(inputOne) + Number(inputTwo)
            break;
        case '-':
            if (inputOne && inputTwo)
                return Number(inputOne) - Number(inputTwo)
            break;
        case '*':
            if (inputOne && inputTwo)
                return Number(inputOne) * Number(inputTwo)
            break;
        case '/':
            if (inputOne && inputTwo)
                return Number(inputOne) / Number(inputTwo)
            break;
    }

}