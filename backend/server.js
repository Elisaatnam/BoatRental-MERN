import "./config/config.js";
import "./models/index.js";

import { app, upload } from "./middlewares/middlewares.js";

import { addNewBoat } from "./controllers/boatController.js";

const PORT = 9999;

//! ------------ GET ROUTES ------------------------

//! ------------ POST ROUTES ------------------------
app.post("/api/boats", upload.single("image"), addNewBoat);

//! ------------ PUT ROUTES ------------------------

//! ------------ DELETE ROUTES ------------------------

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
