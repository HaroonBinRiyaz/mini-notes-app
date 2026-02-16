import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //Check if the user already exists
    const user = await User.findOne({email});
    if (user){
        return res.status(400).json({
            ok: false,
            message: "user already exist"
        });
    }

    //Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password,saltRounds);

    //Create new user
    const newUser = await User.create({
        email,
        password: hashedPassword
    });

    return res.status(201).json({
        ok: true,
        message: "user registered sucessfully",
        data: {
            id: newUser._id, //MONGO DB injects _id on its own
            email: newUser.email
        }
    })
}
