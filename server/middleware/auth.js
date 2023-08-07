import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) {
      return res.status(403).send("Access Denied");
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
