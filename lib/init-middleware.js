import { NextApiRequest, NextApiResponse } from 'next';

export default function initMiddleware(middleware) {
  return async (req, res) => {
    return new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          console.error('Middleware error:', result.message);
          res.status(500).json({ error: 'Middleware error' });
          return reject(result);
        }
        return resolve(result);
      });
    });
  };
}
