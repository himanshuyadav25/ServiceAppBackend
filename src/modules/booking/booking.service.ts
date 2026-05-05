import { Booking } from './booking.model';

export const createBooking = async (data: any) => {
  return Booking.create(data);
};

export const getBookings = async (userId: string) => {
  return Booking.find({ userId });
};
