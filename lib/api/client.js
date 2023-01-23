import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT_KEY}`;

export default axios.create({
    baseURL: baseURL,
});
