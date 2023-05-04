const ApplicationError = require("./ApplicationError");

class LimitTasksError extends ApplicationError {
  constructor(message) {
    super(404, message || "Limit tasks exceeded!");
  }
}

module.exports = LimitTasksError;
