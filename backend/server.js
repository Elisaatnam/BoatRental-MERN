import "./config/config.js";
import "./models/index.js";

import { app, upload } from "./middlewares/middlewares.js";

import { addNewBoat, getAllBoats } from "./controllers/boatController.js";

const PORT = 9999;

//! ------------ GET ROUTES ------------------------
app.get("/api/boats", getAllBoats);

//! ------------ POST ROUTES ------------------------
app.post("/api/boats", upload.single("image"), addNewBoat);

//! ------------ PUT ROUTES ------------------------

//! ------------ DELETE ROUTES ------------------------

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
