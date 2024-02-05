const states = ['S0', 'S1', 'S2'];
const alphabet = ['0', '1'];
const initialState = 'S0';
const finalStates = ['S0', 'S1', 'S2'];
const transitions: [string, string, string][] =
[
    ['S0', '0', 'S0'],
    ['S0', '1', 'S1'],
    ['S1', '0', 'S2'],
    ['S1', '1', 'S0'],
    ['S2', '0', 'S1'],
    ['S2', '1', 'S2']
];


export { states, alphabet, initialState, finalStates, transitions };