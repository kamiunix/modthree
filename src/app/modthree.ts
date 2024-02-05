import { FiniteAutomaton } from '../modules/finiteAutomaton/FiniteAutomaton';
import { states, finalStates, initialState, transitions, alphabet } from '../interfaces/modthree.types';

function modThree(input: string): number {
    const modThreeFA = new FiniteAutomaton(
        states,
        alphabet,
        initialState,
        finalStates,
        transitions
    );

    const finalState = modThreeFA.processInput(input);

    return finalStates.indexOf(finalState!);
}



export { modThree };