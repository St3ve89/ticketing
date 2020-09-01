import { ValidationError } from 'express-validator';

export class ReqestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Only because we are extending a builtin class
    Object.setPrototypeOf(this, ReqestValidationError.prototype);
  }
}
