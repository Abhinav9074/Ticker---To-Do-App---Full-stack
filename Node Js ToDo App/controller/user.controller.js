const UserService = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const successReq = await UserService.registerUser(email,password);
        res.json({
            status:true,
            success:'User Registered Successfully'
        });
    }catch(err){
        throw err
    }
}