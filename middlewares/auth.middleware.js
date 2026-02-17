import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {
        const header = req.headers.authorization;

        if (!header || !header.startsWith("Bearer ")) {
            return res.status(401).json({
                ok: false,
                message: "No token provided"
            });
        }

        const token = header.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

        req.user = decoded;   // ⭐ attach user info to request

        next(); // allow route to run
    } catch (err) {
        return res.status(401).json({
            ok: false,
            message: "Invalid or expired token"
        });
    }
};
