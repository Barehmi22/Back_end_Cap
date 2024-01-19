const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const AgentSchema = new mongoose.Schema({

fullName: String,
email:{type:String, unique : true},
password:String,

})


// Hash password before saving
AgentSchema.pre("save", async function (next) {
    const Agent = this;
    if (Agent.isModified("password") || Agent.isNew) {
      try {
        const hashedPassword = await bcrypt.hash(Agent.password, 10);
        Agent.password = hashedPassword;
        next();
      } catch (error) {
        return next(error);
      }
    } else {
      return next();
    }
  });
  

    AgentSchema.methods.hash = async function (password) {
      try {
        console.log('before hash',password);
        const hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;
        console.log('hash',password);
       return password
      } catch (error) {
        throw error;
      }
    } 
  




  // Method to compare passwords
  AgentSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  // Method to generate JWT token
  AgentSchema.methods.generateToken = function () {
    return jwt.sign(
      { _id: this._id },
       SECRET_KEY, 
       {
      expiresIn: "30s" // Token expiration time
    });
  };

const Agent = mongoose.model('Agent',AgentSchema)

module.exports = Agent;
