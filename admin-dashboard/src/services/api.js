import axios from "axios";

const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

const getUsers = () => API.get("/users");

export default getUsers;