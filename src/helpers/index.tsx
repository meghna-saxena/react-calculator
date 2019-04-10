export const getCalculationResult = (inputOne: number | null, operator: string, inputTwo: number | null): number => {
    let result = 0;

    switch (operator) {
        case '+':
            if (inputOne && inputTwo)
                return result = Number(inputOne) + Number(inputTwo)
            break;
        case '-':
            if (inputOne && inputTwo)
                return result = Number(inputOne) - Number(inputTwo)
            break;
        case '*':
            if (inputOne && inputTwo)
                return result = Number(inputOne) * Number(inputTwo)
            break;
        case '/':
            if (inputOne && inputTwo)
                return result = Number(inputOne) / Number(inputTwo)
            break;
        case '%':
            if (inputOne && inputTwo)
                return result = Number(inputOne) % Number(inputTwo)
            break;
        case '^':
            if (inputOne && inputTwo)
                return result = Number(inputOne) ^ Number(inputTwo)
            break;
        default:
            null
    }

    return result;
}