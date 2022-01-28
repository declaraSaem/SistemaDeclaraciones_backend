import { Schema } from 'mongoose';

export const FiduciarioSchema = new Schema({
  nombreRazonSocial: {
    type: String,
    trim: true,
    uppercase: true,
  },
  rfc: {
    type: String,
    trim: true,
    uppercase: true,
  },
});
