import { Request, Response } from 'express';

export const healthcheckController = (req: Request, res: Response): void => {
  res.status(200).json({ result: 'Healthy' });
};
