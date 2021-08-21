// libraries
import express from "express";

// database model
import {ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route : /food/new
Description :  t add new food review and rating
Params: none
Body : review object
Access : Public
Method : POST
*/

Router.post("/food/new", async (req, res) => {
    try {
      const {reviewData} = req.body;
      await ReviewModel.create(reviewData);
      return res.status(200).json({review : "Review created successfully"});
      
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/*
Route : /new
Description :  add new food review and rating
Params: none
Body : review object
Access : Public
Method : POST
*/

Router.post("/new", async (req, res) => {
    try {
      const {reviewData} = req.body;
      await ReviewModel.create(reviewData);
      return res.status(200).json({review : "Review created successfully"});
      
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  /*
Route : /delete/:_id
Description :  delete food review/ rating
Params: _id
Body : none
Access : Public
Method : POST
*/

Router.post("/delete/:_id", async (req, res) => {
    try {
      const {_id} = req.params;
      await ReviewModel.findByIdAndDelete(_id);
      return res.status(200).json({review : "Review deleted successfully"});
      
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  export default Router;