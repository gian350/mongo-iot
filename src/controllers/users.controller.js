const User = require('../models/User');
const ctrl = {};

ctrl.createUser = async (req, res) => {
  try {
    const { _id, name, surname, password, email, photo, districtId } = req.body;
    const newUser = new User({ _id, name, surname, password: await User.encryptPassword(password), email, photo, districtId });
    const userCreated = await newUser.save();
    res.status(201).json(userCreated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.getUsers = async (req, res) => {
  const users = await User.find();
	res.status(200).json(users);
}

ctrl.getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.status(200).json(user);
}

ctrl.updateUserById = async (req, res) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true
    });
    res.status(200).json(userUpdated);
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.deleteUserById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({
      message: error.name
    });
  }
}

ctrl.signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email });
  if (!userFound) return res.status(200).json({ message: 'incorrect email', token: '0' });
  const matchPassword = await User.comparePassword(req.body.password, userFound.password);
  if (!matchPassword) return res.status(200).json({ message: 'incorrect password', token: '2' });
  res.status(200).json({ message: 'correct email and password', token: '1', userId: userFound._id });
}

module.exports = ctrl;