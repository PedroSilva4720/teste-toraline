import { NextFunction, Request, Response } from 'express';
import { InternalServerError } from './errors';
export const ErrorMIddleware = (
  error: Error & Partial<InternalServerError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;

  const message = error.statusCode ? error.message : 'Internal server error.';

  return res.status(statusCode).json({ message });
};
