class FiniteAutomaton {
    private states: Set<string>;
    private alphabet: Set<string>;
    private initialState: string;
    private finalStates: Set<string>;
    private transitionFunction: Map<string, Map<string, string>>;

    constructor(
        states: string[],
        alphabet: string[],
        initialState: string,
        finalStates: string[],
        transitions: [string, string, string][]
    ) {
        this.states = new Set(states);
        this.alphabet = new Set(alphabet);
        this.initialState = initialState;
        this.finalStates = new Set(finalStates);
        this.transitionFunction = new Map();

        this.validation(states, alphabet, initialState, finalStates, transitions);

        transitions.forEach(([state, input, nextState]) => {
            if (!this.transitionFunction.has(state)) {
                this.transitionFunction.set(state, new Map());
            }
            this.transitionFunction.get(state)!.set(input, nextState);
        });
    }

     validation = (
         states: string[],
         alphabet: string[],
         initialState: string,
         finalStates: string[],
         transitions: [string, string, string][]
     ) => {
        // throw error if any of the final states are not in the set of states
        finalStates.forEach(state => {
            if (!this.states.has(state)) {
                throw new Error(`Final state ${state} not in set of states`);
            }
        });

        // throw error if the initial state is not in the set of states
        if (!this.states.has(initialState)) {
            throw new Error(`Initial state ${initialState} not in set of states`);
        }

        // throw error if any of the transitions are invalid
        transitions.forEach(([state, input, nextState]) => {
            if (!this.states.has(state)) {
                throw new Error(`State ${state} not in set of states`);
            }
            if (!this.alphabet.has(input)) {
                throw new Error(`Input symbol ${input} not in alphabet`);
            }
            if (!this.states.has(nextState)) {
                throw new Error(`Next state ${nextState} not in set of states`);
            }
        });

        // throw error if it is a non-deterministic finite automaton (NFA), i.e. if there are multiple transitions from the same state on the same input
        const transitionFunction = new Map();
        transitions.forEach(([state, input, nextState]) => {
            if (!transitionFunction.has(state)) {
                transitionFunction.set(state, new Map());
            }
            if (transitionFunction.get(state)!.has(input)) {
                throw new Error(`Non-deterministic finite automaton (NFA) detected: multiple transitions from state ${state} on input ${input}`);
            }
            transitionFunction.get(state)!.set(input, nextState);
            console.log('transitionFunction: ', transitionFunction);
        });
     }

    processInput(input: string): string | undefined {
        let currentState = this.initialState;
        for (const symbol of input) {
            if (!this.alphabet.has(symbol)) {
                throw new Error(`Invalid input symbol: ${symbol}`);
            }
            const nextState = this.transitionFunction.get(currentState)?.get(symbol);
            if (!nextState) {
                throw new Error(`No transition defined for state ${currentState} on input ${symbol}`);
            }
            currentState = nextState;
        }
        return currentState;
    }

    isInputAccepted(input: string): boolean {
        const finalState = this.processInput(input);
        return this.finalStates.has(finalState!);
    }
}

export { FiniteAutomaton };
