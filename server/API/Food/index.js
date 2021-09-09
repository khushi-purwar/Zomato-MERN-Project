// libraries
import express from 'express';
import passport from 'passport';

// database model
import {FoodModel} from '../../database/allModels';

// validations
import { VaildateCategory , VaildateRestaurantId} from '../../validation/food';

const Router = express.Router();


/*
Route : /r
Description : get all the food details based on particular restaurant
Params: _id
Access : Public
Method : Get
*/

Router.get('/r/:_id', async(req,res)=>{         // r -> restaurant
    try{
        await VaildateRestaurantId(req.params)
        const {_id} = req.params;
        const foods = await FoodModel.find( {restaurant: _id} )

        return res.json({foods});
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
      }
})

/*
Route : /r
Description : get all the food details based on particular restaurant
Params: category
Access : Public
Method : Get
*/

Router.get('/r/:category', async(req,res)=>{         // r -> restaurant
    try{
        await VaildateCategory(req.params)
        const {category} = req.params;
        const foods = await FoodModel.find( {category : {
            $regex: category, $options: "i"
        }} );

        return res.json({foods});
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
      }
})


export default Router;