import axios from "axios";

export default axios.create({
    params: {
        key: "2fd123bf51364edbb83ecd331132c23f"
    },
    baseURL: "https://api.rawg.io/api",
    headers: {
        "Content-type": "application/json"
    }
});