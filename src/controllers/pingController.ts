import { Request, Response } from 'express';

/**
 * @openapi
 * /api/ping:
 *   get:
 *     description: Basic connectivity check
 *     responses:
 *       200:
 *         description: pong
 */
export const pingController = (req: Request, res: Response): void => {
  // we want ping to never cache a response
  res.set('Cache-Control', 'no-store');
  res.status(200).json({ result: 'pong' });
};
