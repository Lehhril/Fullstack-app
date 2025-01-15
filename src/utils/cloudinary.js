import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_API_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
   try {
    const uploadOnCloudinary = async (localFilePath) => {
        if(!localFilePath) return null;


       const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        console.log("File Uploaded successfully on Cloudinary" , response.url)
        return response.url

    }
   } catch (error) {
    if(!localFilePath){
        fs.unlinkSync(localFilePath)
        return null;
    }
   }

export {uploadOnCloudinary}

  