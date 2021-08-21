// libraries
import express from "express";

// database model
import {UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route : /:_id
Description :  get user data
Params: _id
Body : review object
Access : Public
Method : GET
*/

Router.get('/:_id', async(req,res)=>{
    try{
        const {_id}  = req.params;
        const getUser = await UserModel.findById(_id);
        return res.json({user : getUser});
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
      }
})

/*
Route : /update/:_id
Description :  update user data
Params: _id
Body : user data
Access : Public
Method : PUT
*/

Router.put('/update/:_id', async(req,res)=>{   // _id: userid
    try{
        const {_id}  = req.params;
        const {userData} = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            _id,  {
                $set : userData,
        },
        {
            new: true
        })
        return res.json({user : updateUserData});
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
      }
})

export default Router;