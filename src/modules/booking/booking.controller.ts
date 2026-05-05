import { Request, Response } from 'express';
import { createBooking, getBookings } from './booking.service';
import { UserPayload } from '../../types/request';

// Create a local helper interface
interface AuthRequest extends Request {
  user?: UserPayload;
}

export const create = async (req: AuthRequest, res: Response) => {
  if (!req.user) return res.sendStatus(401);

  const booking = await createBooking({
    ...req.body,
    userId: req.user.userId,
  });
  res.json(booking);
};

export const getAll = async (req: AuthRequest, res: Response) => {
  if (!req.user) return res.sendStatus(401);

  const bookings = await getBookings(req.user.userId);
  res.json(bookings);
};
