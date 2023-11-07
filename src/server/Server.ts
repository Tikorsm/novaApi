
import express from "express";
import 'dotenv/config'
import './shared/services/TranlationsYup';

import { router } from "./routes";

const server = express();


server.use(express.json());

server.use(router);

export { server };