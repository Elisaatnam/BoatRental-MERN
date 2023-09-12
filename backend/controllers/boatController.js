import { Boat } from "../models/BoatModel.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUDNAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const addNewBoat = async (req, res) => {
	try {
		cloudinary.uploader
			.upload_stream(
				{ resource_type: "image", folder: "Boote" },
				async (err, result) => {
					const response = await Boat.create({
						...req.body,
						image: { url: result.secure_url, imageId: result.public_id },
					});
					res.send(response);
				},
			)
			.end(req.file.buffer);
	} catch (err) {
		console.log(err);
	}
};
