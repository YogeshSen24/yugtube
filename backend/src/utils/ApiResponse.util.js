class ApiResponse {
    constructor(data, message = 'Success', status = 200) {
      this.data = data;
      this.message = message;
      this.status = status;
    }
  }
  
export {ApiResponse};
  