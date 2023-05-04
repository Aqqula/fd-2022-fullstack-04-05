const createError = require("http-errors");
const { User } = require("../models");
const NotFoundError = require("../errors/NotFoundError");

module.exports.checkUser = async (req, res, next) => {
  try {
    const {
      params: { idUser },
      idUserForTask,
    } = req;
    const id = idUser || idUserForTask;
    const user = await User.findByPk(idUser);
    if (!user) {
      // throw new Error('user not found');
      return next(new NotFoundError("User not found"));
    }
    req.userInstance = user;
    next();
  } catch (error) {
    next(error);
  }
};
