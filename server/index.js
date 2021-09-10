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
import routeConfig from './config/route.config';

// microservices routes
import Auth from './API/Auth';
import Restaurant from './API/Restaurant';
import Food from './API/Food';
import Image from './API/Image'
import Order from './API/Orders';
import Reviews from './API/Reviews';
import User from './API/User';
import Menu from "./API/Menu";
import MailService from "./API/Mail";

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
routeConfig(passport);

// application routes
zomato.use('/auth',Auth);
zomato.use('/restaurant', Restaurant);
zomato.use('/food', Food);
zomato.use('/image', Image);
zomato.use('/order', Order );
zomato.use('/reviews' , Reviews);
zomato.use('/user',User);
zomato.use("/menu", Menu);
zomato.use("/mail", MailService);

zomato.get('', (req,res)=>{
    res.json({message : "setup success"})
})

zomato.listen('8000',()=>{
    ConnectDB()
    .then( ()=> console.log("Database connected successfully & Server started at port 8000!"))
    .catch( ()=> console.log("Server is running , but database connection failed") )
    
})