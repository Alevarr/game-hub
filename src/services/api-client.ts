import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "4a736bb94c2c464b85e41ef026e6bd10"
    }
})