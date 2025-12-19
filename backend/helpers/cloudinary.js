const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'eshopping',
            use_filename: true,
            unique_filename: false
        });
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        console.log(error);
        throw new Error('Image upload failed');
    }
}

const removeImage = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId, {
            folder: 'eshopping',
        });
        console.log('Image removed from Cloudinary:', result);
        return result;
    } catch (error) {
        console.error('Error removing image from Cloudinary:', error);
        throw new Error('Image removal failed');
    }
}
module.exports = { uploadImage, removeImage };