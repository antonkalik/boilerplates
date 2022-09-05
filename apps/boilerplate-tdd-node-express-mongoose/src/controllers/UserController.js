import User from '../models/User';

export default class UserController {
  static async create(req, res) {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
  static async get(req, res) {
    try {
      const user = await User.findById(parseInt(req.params.id, 10));
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
  static async list(req, res) {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
