## ModThree Project

This project implements a finite state machine (FSM) factory module to create any number of finite state machines given a set of states and transitions. The FSM module is implemented in TypeScript and is tested using Jest.


A finite automaton (FA) is a 5-tuple (Q,Σ,q0,F,δ) where:
```
Q is a finite set of states;
Σ is a finite input alphabet;
q0 ∈ Q is the initial state;
F ⊆ Q is the set of accepting/final states;
δ:Q×Σ→Q is the transition function.
```
An example implementation of a finite state machine is provided in the `index.ts` file. The example machine is a simple turnstile that accepts a sequence of coin and push events and transitions between locked and unlocked states.

You can create your own finite state machine by creating a new instance of the FSM class and providing the states and transitions as arguments to the constructor. The FSM class provides methods to transition between states and check if the machine is in an accepting state.

```typescript
import { FSM } from './fsm';

const states = ['locked', 'unlocked'];
const alphabet = ['coin', 'push'];
const initialState = 'locked';
const finalStates = ['unlocked', 'locked'];
const transitions = [
    { from: 'locked', to: 'unlocked', event: 'coin' },
    { from: 'unlocked', to: 'locked', event: 'push' },
];

const turnstile = new FSM(states, alphabet, initialState, finalStates, transitions);
this.turnstile.processInput('coin');
```

# Prerequisites

    Node.js (LTS version recommended)
    npm or yarn

# Installation

First, clone this repository to your local machine. Then, navigate to the project directory and install the dependencies.

``` bash
git clone https://github.com/kamiunix/modthree.git
cd modthree
npm install
```

Or, if you are using yarn:

```bash

git clone https://github.com/kamiunix/modthree.git
cd modthree
yarn install
```

Running the Project

```bash

npm run start
```

Or with yarn:

```bash

yarn start
```

Running Tests

This project uses Jest for unit testing. To execute the tests, run:

```bash

npm test
```

Or with yarn:

```bash

yarn test
```

