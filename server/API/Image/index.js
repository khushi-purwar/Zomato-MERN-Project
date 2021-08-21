// libraries
import express from 'express';
import passport from 'passport';
import multer from 'multer';

// database model
import {ImageModel} from '../../database/allModels';


// Utilities
import { s3Upload } from '../../Utils/AWS/s3';

const Router = express.Router();

// configure multer
const storage = multer.memoryStorage()      // memory of the server
const upload = multer({ storage })


/*
Route : /
Description : uploads given image to s3 bucket and return saves file link to mongodb
Params: none
Access : Public
Method : Post
*/

Router.post('/', upload.single("file") ,async(req, res)=>{
    try{
        const file = req.file;
        
        // s3 bucket options
        const bucketOptions = {
            Bucket : "provide bucket name",  // bucket name
            Key: file.originalname,
            Body : file.buffer,
            ContentType : file.mimetype,
            ACL: "public-read",  // Access Control List
        };

        // upload images to s3 
        const uploadImage = await s3Upload(bucketOptions); // return the url of the image

        return res.status(200).json({uploadImage});

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
      }
})



export default Router;