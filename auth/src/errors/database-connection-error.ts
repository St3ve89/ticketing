export class DatabaseConnectionError extends Error {
  reason = 'Error connecting to database';
  constructor() {
    super();

    // Only because we are extending a builtin class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
