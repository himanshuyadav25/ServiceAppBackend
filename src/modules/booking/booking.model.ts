import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service: String,
  date: Date,
});

export const Booking = mongoose.model('Booking', bookingSchema);
