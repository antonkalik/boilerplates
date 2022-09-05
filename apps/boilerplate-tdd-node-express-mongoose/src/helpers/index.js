import uniqid from 'uniqid';

export const MONGO_UUID = {
  type: String,
  required: true,
  unique: true,
  default() {
    return uniqid();
  },
};
