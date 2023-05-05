import User from '../models/user.js';


export const create = async (req, res)=>{

    try {
        let user = await User.findOne({email: req.body.email});
        // console.log(user);
        if(user){
            return res.status(200).json({
                message: "User with same email already exists"
            });

        }else{
            if(req.body.password == req.body.confirm_password){
                
                await User.create(req.body);

                return res.status(200).json({
                    message: "User Registration successful !!"
                })

            }else{
                console.log("Password and confirm password does not match");
                return res.status(200).json({
                    message: "Password and confirm password does not match"
                });
            }
        }

    }catch (error) {
        console.log('Error while creating user : ', error); 
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const createSession = async function(req, res){
    try {
        let user = await User.findOne({email: req.body.email});
        if(user){
            if(user.password == req.body.password){
                
                res.status(200).json({
                    message: "Successfully logged In"
                });
            }
        }else{
            return res.status(200).json({
                message: "User does not exist !!"
            })
        }
    
    } catch (error) {
        console.log("Error while creating session : ", error);
        return res.status(500).json({
            message: "Internal server error"
        })    
    }
}