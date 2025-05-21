// src/components/GrabData/Mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Mock Post 1', body: 'Mock Body 1' },
        { id: 2, title: 'Mock Post 2', body: 'Mock Body 2' },
      ])
    );
  }),
];
