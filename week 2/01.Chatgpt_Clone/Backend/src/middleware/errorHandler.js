const errorHandler = (err, req, res, next) => {
  console.error("Error in request:", error.message);
  return res.status(error.message || 500).json({
    status: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
