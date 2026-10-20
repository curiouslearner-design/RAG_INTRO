import express from "express"
import {EmbeddingController} from "../controller/User/embeding.js";
const route =express.Router();
route.post("/ans",EmbeddingController);
export default route;