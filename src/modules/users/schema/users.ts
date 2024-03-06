import { Schema } from 'dynamoose';

export const UsersSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  email: {
    type: String,
  },
  passwordHash: {
    type: String,
  },
  role: {
    type: String,
  },
  profileID: {
    type: String,
  },
  createAt: {
    type: String,
  },
});
