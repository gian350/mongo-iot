const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  _id: String,
  name: String,
  surname: String,
  password: String,
  email: { type: String, unique: true },
  photo: String,
  districtId: { ref: 'District', type: String, required: true }
}, {
  timestamps: false,
  versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (passwordReceived, passwordEncrypted) => {
  return await bcrypt.compare(passwordReceived, passwordEncrypted);
}

module.exports = model('User', userSchema);