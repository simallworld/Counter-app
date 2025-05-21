# Counter-app

Building basic Counter Application and try to test it using Jest land related libraries. And implemented useQuery for get some data from an api and populated it in the UI.

## Deployes Link-

https://counter-app-tawny-omega.vercel.app/

## Steps for Testing in Jest + Dependencies

If you're using Vite for your React project, the process for setting up Jest and @testing-library/react is slightly different because Vite doesn’t come with Jest preconfigured like Create React App does.

### Step-by-Step Setup for Vite + React + Jest + @testing-library/react

📦 Step 1: Create a Vite React App
npm create vite@latest my-vite-app -- --template react
cd my-vite-app
npm install
📦 Step 2: Install Required Testing Dependencies
You need to install Jest and related packages manually:

bash
Copy
Edit
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom @testing-library/user-event identity-obj-proxy
identity-obj-proxy is used for mocking CSS modules in Jest.

⚙️ Step 3: Configure Babel for Jest
Create a file called babel.config.js:

js
Copy
Edit
// babel.config.js
module.exports = {
presets: ['@babel/preset-env', '@babel/preset-react'],
};
⚙️ Step 4: Configure Jest
Create a jest.config.js file:

js
Copy
Edit
// jest.config.js
export default {
testEnvironment: 'jsdom',
moduleNameMapper: {
'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
},
setupFilesAfterEnv: ['./src/setupTests.js'],
};
⚙️ Step 5: Setup Jest DOM
Create src/setupTests.js:

js
Copy
Edit
import '@testing-library/jest-dom';
🧱 Step 6: Create Your Component
Create src/Counter.jsx:

jsx
Copy
Edit
import React, { useState } from 'react';

const Counter = ({ initialCount = 0 }) => {
const [count, setCount] = useState(initialCount);

return (

<div>
<h1 data-testid="count">{count}</h1>
<button data-testid="increment" onClick={() => setCount(count + 1)}>Increment</button>
<button data-testid="decrement" onClick={() => setCount(count - 1)}>Decrement</button>
</div>
);
};

export default Counter;
🧪 Step 7: Write Test Cases
Create src/Counter.test.jsx:

jsx
Copy
Edit
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
test('Initial rendering with default count', () => {
render(<Counter />);
expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('Initial rendering with custom count', () => {
render(<Counter initialCount={5} />);
expect(screen.getByTestId('count')).toHaveTextContent('5');
});

test('Incrementing the counter', () => {
render(<Counter />);
fireEvent.click(screen.getByTestId('increment'));
expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('Decrementing the counter', () => {
render(<Counter initialCount={3} />);
fireEvent.click(screen.getByTestId('decrement'));
expect(screen.getByTestId('count')).toHaveTextContent('2');
});

test('Edge case: counter can go negative', () => {
render(<Counter />);
fireEvent.click(screen.getByTestId('decrement'));
expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
});
▶️ Step 8: Run the Tests
Add this to package.json scripts:

json
Copy
Edit
"scripts": {
"test": "jest"
}
Now run:

bash
Copy
Edit
npm test
✅ Summary Table
Step Action

1. Create Vite project
2. Install Jest and Testing Library
3. Set up Babel
4. Configure Jest
5. Add jest-dom setup
6. Write a React component
7. Write test cases
8. Run with npm test
