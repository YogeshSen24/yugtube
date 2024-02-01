
class ApiError extends Error {
    constructor(message, status = 500, additionalData = {}) {
      super(message);
      this.name = this.constructor.name;
      this.status = status;
      this.additionalData = additionalData;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
export {ApiError};
  