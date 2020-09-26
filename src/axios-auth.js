// node modules にある axios を import
import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/disco-outpost-270917/databases/(default)/documents",
});

export default instance;
