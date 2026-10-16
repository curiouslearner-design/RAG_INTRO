import express from "express"
import { fetchData } from "../controller/fetcher/fetchgrammer";
const route =express.Router();
route.get("/ans",fetchData);
export default route;