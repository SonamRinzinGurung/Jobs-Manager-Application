import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const duplicateUser = await User.findOne({ email });
  if (duplicateUser) {
    throw new BadRequestError("Email is already in use");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
    },
    token,
    location: user.location,
  });
};

/**
 *Login controller
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please enter email and password");
  }
  const user = await User.findOne({ email }).select("+password"); //add the password to the response object
  if (!user) {
    throw new UnAuthenticatedError("Invalid credentials");
  }
  const isCorrectPassword = await user.comparePassword(password);
  if (!isCorrectPassword) {
    throw new UnAuthenticatedError("Invalid credentials");
  }
  const token = user.createJWT();

  //remove the password from the response for security reasons
  user.password = undefined;

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
