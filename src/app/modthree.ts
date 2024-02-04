import { stateTransition, stateReturn} from '../interfaces/modthree.types';
function modThree(input: string): number {
    // Initial state
    let currentState = 'S0';

    // Process each bit from the input
    for (const bit of input) {
        currentState = stateTransition[currentState][bit];
    }

    // Return the remainder based on the final state
    const result: number = stateReturn[currentState];

    // handle invalid final states
    if (result === undefined) {
        throw new Error('Invalid final state');
    }

    return result;
}

export { modThree };