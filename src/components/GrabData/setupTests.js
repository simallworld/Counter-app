// setupTests.js
require('@testing-library/jest-dom');
// Polyfill for TextEncoder/TextDecoder for MSW in Node.js
const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

require("@testing-library/jest-dom");
const { server } = require("./components/GrabData/Mocks/server");

// Start MSW
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
