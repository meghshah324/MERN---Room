import User from "../models/user.model.js";
import becrypt from "bcryptjs"




export  const signup = async (req,res) => {
    const {username , email ,  password , gender } = req.body;
    const hashPassword = becrypt.hashSync(password,10);
    const newUser = new User({
         username , email, password : hashPassword ,gender
    })
    try{
        await newUser.save();
        res.status(201).send("User Creted Successfuly");
    } catch(err){
        res.status(501).send(err.message);
    }
}