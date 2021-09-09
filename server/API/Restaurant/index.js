// libraries
import express from 'express';
import passport from 'passport';

// database model
import {RestaurantModel} from '../../database/allModels';

// validations
import { VaildateRestaurantCity, VaildateRestaurantSearchString } from '../../validation/restaurant';
import { VaildateRestaurantId} from '../../validation/food';

const Router = express.Router();

/*
Route : /
Description : get all the restaurants details based on city
Params: none
Access : Public
Method : Get
*/

Router.get('/', async(req, res)=>{
    try{
        await VaildateRestaurantCity(req.query);
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
      }
})

/*
Route : /
Description : get individual restaurant details based on id
Params: id
Access : Public
Method : Get
*/

Router.get('/:_id',async(req, res)=>{
    try{
        await VaildateRestaurantId(req.params);
        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant)
           return res.status(404).json({ error: "Restaurant Not Found" });
        
        return res.json({restaurant});
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
      }
})

/*
Route : /search
Description : get  restaurant details based on search string
Params: none
Body : search string
Access : Public
Method : Get
*/

Router.get('/search', async(req,res) => {
    try{
        await VaildateRestaurantSearchString(req.body);
        const {searchString} = req.body;
        const restaurants = await RestaurantModel.find({
            name : {$regex: searchString, $options: "i"}
        })
        if (!restaurants)
          return res.status(404).json({ error: `No Restaurant matched with ${searchString}` });

    return res.json({ restaurants });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;