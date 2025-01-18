export const validate = (schema) => {
  // it returns a validating middleware
  return async (req, res, next) => {
    try {
      console.log(schema);
      schema.parse(req.body);
      next();
    } catch (err) {
      return res.status(400).json({
        error: err.errors,
        success: false,
        message: "Validation failed",
      });
    }
  };
};
