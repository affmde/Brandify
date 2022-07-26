const handleValidationError = (err) => {
    let message;
    const key = Object.keys(err.errors);
    if (err.errors[key[0]] && err.errors[key[0]].properties) {
      message = err.errors[key[0]].properties.message;
    }
    return message;
  }

const handleTokenExpirationError = (err) =>{
  let message;
  if(err.name==="TokenExpiredError"){
    message="Your session has expired. Please login again.";
    return message
  }

}
  module.exports = {
    handleValidationError,
    handleTokenExpirationError
  }