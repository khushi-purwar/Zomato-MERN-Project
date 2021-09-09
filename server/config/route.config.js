import passport, { Passport } from 'passport';
import JwtPassport from 'passport-jwt';

// database model
import { UserModel } from '../database/user';

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'ZomatoAPP',
};

export default (passport)=>{
    passport.use(new JWTStrategy(options, async(jwt_payload, done) =>{
        try {
            const doesUserExists = UserModel.findById(jwt_payload.user);
            if(!doesUserExists) return done(null, false);
            return done(null, doesUserExists);
        } catch (error) {
            throw new Error(error);
        }
    }));
}