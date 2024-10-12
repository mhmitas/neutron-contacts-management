import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImageOnCloudinary(image) {
    try {
        const imageBuffer = Buffer.from(await image.arrayBuffer())
        // Return the uploaded result as a Promise
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { public_id: `${image.name?.split(".")?.[0]}-${Date.now()}` },
                (error, result) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(result.secure_url)
                    }
                }
            );
            stream.end(imageBuffer)
        })
    } catch (error) {
        console.log(error)
    }
}

export async function deleteImageFromCloudinary(url) {
    try {
        const publicId = url?.split('/')?.pop()?.split('.')?.shift();
        await cloudinary.uploader.destroy(publicId);
        return true;
    } catch (error) {
        console.log(error)
    }
}