import mongoose from "mongoose";

const boatSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	baujahr: {
		type: Number,
		required: true,
	},
	seriennummer: {
		type: String,
		required: true,
	},
	bootsart: {
		type: String,
		required: true,
	},
	image: {
		type: {
			url: String,
			imageId: String,
		},
	},
});

export const Boat = mongoose.model("Boats", boatSchema);
