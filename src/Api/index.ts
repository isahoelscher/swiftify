import axios from "axios";

export const request = axios.create({
	baseURL: "https://taylorswiftapi.onrender.com/",
	responseType: "json",
});
