const jwt = require("jsonwebtoken");

const generateToken = async (id) => {
  return await jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const protect = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const auth = req.headers.authorization.split(" ")[1];

      if (auth.length === 0) {
        res.status(401).send({ message: "Please pass proper token" });
      }

      const decodedPassword = await jwt.decode(auth, process.env.JWT_SECRET);
      req.userId = decodedPassword["id"];
      next();
    } else {
      res.status(401).send({ message: "Unauthorised" });
    }
  } catch (err) {
    res.send("Please Pass proper auth details");
  }
};

module.exports = { generateToken, protect };
