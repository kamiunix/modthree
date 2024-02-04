// Define the state transition table
// stateTransition[currentState][inputBit]
const stateTransition: Record<string, Record<string, string>> = {
    'S0': {'0': 'S0', '1': 'S1'},
    'S1': {'0': 'S2', '1': 'S0'},
    'S2': {'0': 'S1', '1': 'S2'}
};

// return values given the current state
const stateReturn: Record<string, number> = {
    'S0': 0,
    'S1': 1,
    'S2': 2
};

export { stateTransition, stateReturn};