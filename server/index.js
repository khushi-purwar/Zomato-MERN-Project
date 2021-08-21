// importing env variables
require("dotenv").config();

// Libraries
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';

// configs
import googleAuthConfig from './config/google.config'

// microservices
import Auth from './API/Auth'

// database connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middleware
zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configuration
googleAuthConfig(passport);

// application routes
zomato.use('/auth',Auth)

zomato.get('', (req,res)=>{
    res.json({message : "setup success"})
})

zomato.listen('4000',()=>{
    ConnectDB()
    .then( ()=> console.log("Database connected successfully & Server started at port 4000!"))
    .catch( ()=> console.log("Server is running , but database connection failed") )
    
})