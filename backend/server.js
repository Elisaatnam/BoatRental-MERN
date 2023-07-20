import "./config/config.js";
import "./models/index.js";
import express from "express";
import multer from "multer"; //Multer ist ein sehr beliebtes Middleware-Modul, das speziell für die Verarbeitung von Dateiuploads in Express.js-Anwendungen entwickelt wurde.
import morgan from "morgan"; //Das Modul "morgan" wird verwendet, um HTTP-Anforderungen zu protokollieren, was besonders hilfreich ist, um Informationen über den Serverbetrieb und die Anforderungen zu erhalten.
import { v2 as cloudinary } from "cloudinary";
import { Boat } from "./models/BoatModel.js";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUDNAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = 9999;

const upload = multer({ storage: multer.memoryStorage() }); //An dieser Stelle wird eine Upload-Instanz erstellt. Dabei wird die Funktion multer() aufgerufen und als Parameter ein Konfigurationsobjekt übergeben. In diesem Fall verwenden wir { storage: multer.memoryStorage() }, um den Speicherort für die hochgeladenen Dateien festzulegen. "multer.memoryStorage()" ist eine Funktion, die einen Speicherbereich im Arbeitsspeicher (RAM) für die zwischengespeicherten Dateien bereitstellt. Mit dieser Konfiguration werden die Dateien nicht dauerhaft auf der Festplatte gespeichert, sondern nur im Arbeitsspeicher gehalten.

app.use(express.json());
app.use(morgan("dev")); // Mit der Anweisung app.use() wird "morgan" als Middleware in der Express.js-Anwendung eingebunden. Der Parameter "dev" gibt an, welche Art von Protokollierung durchgeführt werden soll.In diesem Fall steht "dev" für ein vordefiniertes Ausgabeformat von "morgan", das als Entwicklungsformat bekannt ist. Wenn du deine Anwendung im Entwicklungsmodus ausführst, wird "morgan" die Protokollierung auf der Konsole ausgeben. Die protokollierten Informationen enthalten beispielsweise die HTTP-Methode, die angeforderte URL, den HTTP-Statuscode, die Antwortzeit und andere nützliche Informationen.

//! ------------ GET ROUTES ------------------------

//! ------------ POST ROUTES ------------------------
app.post("/api/boats", upload.single("image"), (req, res) => {
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
});

//! ------------ PUT ROUTES ------------------------

//! ------------ DELETE ROUTES ------------------------

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
