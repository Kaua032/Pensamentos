import express from "express";
import router from "./src/routes/index.js"

import connection from "./src/database/index.js";

const app = express();

app.use(express.json());
app.use(router)

export default app;