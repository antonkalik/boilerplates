import mongoose, { Schema } from 'mongoose';
import { MONGO_UUID } from '../helpers/index';

mongoose.set('returnOriginal', false);

const UserSchema = new Schema({
  uuid: MONGO_UUID,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post', default: [] }],
});

UserSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

export default mongoose.model('User', UserSchema);
