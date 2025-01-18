const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;

// export default User;
