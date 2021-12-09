import axios from "axios";

//const url = "https://quiet-gorge-88830.herokuapp.com";
const url = "http://localhost:5000";

const instance = axios.create({
	baseURL: url,
});

export default instance;
