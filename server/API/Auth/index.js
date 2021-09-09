// Library
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';

// Models
import {UserModel} from '../../database/user';

//  validations
import { VaildateSignup , VaildateSignin} from '../../validation/auth';

const Router = express.Router();

/*
Route : /signup
Description : Register new user
Params: none
Access : Public
Method : Post
*/

Router.post('/signup', async(req,res)=>{
   
    try{

        await VaildateSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials)
         
        // save to db
        const newUser = await UserModel.create(
            req.body.credentials
        );

        // generate JWT auth token
        const token = newUser.genarateJwtToken();

        // return 
        return res.status(200).json({ token, status:"success" });

    }catch(error){
        return res.status(500).json({error : error.message})
    }
});

/*
Route : /signin
Description : signin with email and password
Params: none
Access : Public
Method : Post
*/

Router.post('/signin', async(req,res)=>{
    try{
        
        await VaildateSignin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials)
        const token = user.genarateJwtToken();
        return res.status(200).json({ token, status:"success" });

    }catch(error){
        return res.status(500).json({error : error.message})
    }
})



/*
Route : /google
Description : signin with google
Params: none
Access : Public
Method : GET
*/

Router.get('/google',
  passport.authenticate('google', { scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ], }));



 /*
Route : /google/callback
Description : Google signin callback
Params: none
Access : Public
Method : GET
*/

Router.get('/google/callback', 
 passport.authenticate('google', { failureRedirect: '/' }),
(req, res)=> {
   res.json({token:req.session.passport.user.token})
 });

 export default Router;