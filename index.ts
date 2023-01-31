import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes";
import { PrismaClient } from ".prisma/client";

const cors = require("cors");
const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(3000);

export { app, prisma };
