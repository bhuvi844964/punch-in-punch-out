const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    designation: {
      type: String,
      required: true,
    },

    profileImage: {
      type : String,
      required: true,
    },
    Date: {
      type:String
  },
  PunchIn: {
      type:String
  },

  PunchOut: {
      type:String
  },
  session: {
      type:String
  },





  },
  { timestamps: true }
);


module.exports = mongoose.model("user", userSchema);
