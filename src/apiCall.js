import axios from "axios";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});
export const getData = async (url) => {
    return await client.get(url);


}
export const postData = async (url, data) => {

    return await client.post(url, data);



}