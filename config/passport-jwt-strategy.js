import env from './environment.js';
import passport from 'passport';
import passportJWT from 'passport-jwt';
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJWT;

import User from '../models/user.js';

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: env.jwt_secret
}

passport.use(new JWTStrategy(opts, async function(jwtPayLoad, done){
    try {
        let user = await User.findById(jwtPayLoad._id);    
        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    } catch (error) {
        console.log("Error in finding user from JWT : ", err); return ;
    }

}))

export default passport;