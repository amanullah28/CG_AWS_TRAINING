module.exports = function responseGenerator(status, message, data) {
    return {
      status: status,
      message: message.replace(/\"/g, ""),
      data: data,
    };
  }