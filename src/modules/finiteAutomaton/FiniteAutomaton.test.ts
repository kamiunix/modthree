import { FiniteAutomaton } from './FiniteAutomaton';

// mod 3 FiniteAutomaton tests
describe('mod 3 FiniteAutomaton', () => {
    let modThreeFA: FiniteAutomaton;

    beforeAll(() => {
        modThreeFA = new FiniteAutomaton(
            ['S0', 'S1', 'S2'], // States
            ['0', '1'], // Alphabet
            'S0', // Initial state
            ['S0', 'S1', 'S2'], // Accepting states
            [ // Transition function
                ['S0', '0', 'S0'], ['S0', '1', 'S1'],
                ['S1', '0', 'S2'], ['S1', '1', 'S0'],
                ['S2', '0', 'S1'], ['S2', '1', 'S2']
            ]
        );
    });

    test('modThreeFA correctly processes input "1101" to final state S1', () => {
        expect(modThreeFA.processInput("1101")).toBe('S1');
    });

    test('modThreeFA correctly processes input "1110" to final state S2', () => {
        expect(modThreeFA.processInput("1110")).toBe('S2');
    });

    test('modThreeFA correctly processes input "1111" to final state S0', () => {
        expect(modThreeFA.processInput("1111")).toBe('S0');
    });

    test('modThreeFA throws an error for invalid input symbol', () => {
        expect(() => modThreeFA.processInput("1102")).toThrow('Invalid input symbol: 2');
    });
});

// valid construction input tests
describe('FiniteAutomaton construction', () => {
    test('should throw an error for invalid destination state in transition function', () => {
        expect(() => {
            new FiniteAutomaton(
                ['S0', 'S1', 'S2'],
                ['0', '1'],
                'S0',
                ['S0', 'S1', 'S2'],
                [
                    ['S0', '0', 'S0'],
                    ['S0', '1', 'S1'],
                    ['S1', '0', 'S2'],
                    ['S1', '1', 'S0'],
                    ['S2', '0', 'S1'],
                    ['S2', '1', 'S3']
                ]
            );
        }).toThrow('Next state S3 not in set of states');
    });

    test('should throw an error for invalid input symbol in transition function', () => {
        expect(() => {
            new FiniteAutomaton(
                ['S0', 'S1', 'S2'],
                ['0', '1'],
                'S0',
                ['S0', 'S1', 'S2'],
                [
                    ['S0', '0', 'S0'],
                    ['S0', '2', 'S1'],
                    ['S1', '0', 'S2'],
                    ['S1', '1', 'S0'],
                    ['S2', '0', 'S1'],
                    ['S2', '1', 'S2']
                ]
            );
        }).toThrow('Input symbol 2 not in alphabet');
    });

    test('should throw an error for invalid initial state in transition function', () => {
        expect(() => {
            new FiniteAutomaton(
                ['S0', 'S1', 'S2'],
                ['0', '1'],
                'S0',
                ['S0', 'S1', 'S2'],
                [
                    ['S0', '0', 'S0'],
                    ['S0', '1', 'S1'],
                    ['S1', '0', 'S2'],
                    ['S1', '1', 'S0'],
                    ['S2', '0', 'S1'],
                    ['S3', '1', 'S2']
                ]
            );
        }).toThrow('State S3 not in set of states');
    });

    test('should throw an error for if the initial state is not in set of states', () => {
        expect(() => {
            new FiniteAutomaton(
                ['S0', 'S1', 'S2'],
                ['0', '1'],
                'S3',
                ['S0', 'S1', 'S2'],
                [
                    ['S0', '0', 'S0'],
                    ['S0', '1', 'S1'],
                    ['S1', '0', 'S2'],
                    ['S1', '1', 'S0'],
                    ['S2', '0', 'S1'],
                    ['S2', '1', 'S2']
                ]
            );
        }).toThrow('Initial state S3 not in set of states');
    });

    test('should throw an error for if the final state is not in set of states', () => {
        expect(() => {
            new FiniteAutomaton(
                ['S0', 'S1', 'S2'],
                ['0', '1'],
                'S0',
                ['S0', 'S1', 'S3'],
                [
                    ['S0', '0', 'S0'],
                    ['S0', '1', 'S1'],
                    ['S1', '0', 'S2'],
                    ['S1', '1', 'S0'],
                    ['S2', '0', 'S1'],
                    ['S2', '1', 'S2']
                ]
            );
        }).toThrow('Final state S3 not in set of states');
    });

    test('should throw an error if the finite automaton is non-deterministic', () => {
        expect(() => {
            new FiniteAutomaton(
                ['S0', 'S1', 'S2'],
                ['0', '1'],
                'S0',
                ['S0', 'S1', 'S2'],
                [
                    ['S0', '0', 'S0'],
                    ['S0', '0', 'S1'],
                    ['S1', '0', 'S2'],
                    ['S1', '1', 'S0'],
                    ['S2', '0', 'S1'],
                    ['S2', '1', 'S2']
                ]
            );
        }).toThrow('Non-deterministic finite automaton (NFA) detected: multiple transitions from state S0 on input 0');
    });
});