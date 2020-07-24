import axios from "axios";
import RestResponse from "./restResponse"
import consola from "consola";
import ConstService from "../constants";
class Http {
    constructor() {
        this.URL = ConstService.API;
        axios.defaults.baseURL = this.URL
    }

    async request(method, url, { headers = {}, body = {}, params = {}}) {
        let response = null;
        try {
            response = await axios.request({
                method,
                url,
                headers,
                data: body,
                params
            });
            return new RestResponse(response);
        } catch (error) {
            if(error.response) {
                return new RestResponse(error.response);
            } else if (error.request) {
                consola.error(error);
                return new RestResponse({
                    status: 500,
                    data: {
                        status: 500,
                        error: "No response!",
                        message: "The server didn't respond!"
                    },
                    headers: {}
                });
            } else {
                consola.error(error);
                return new RestResponse({
                    status: 500,
                    data: {
                        status: 500,
                        error: "Request failed!",
                        message: "The request couldn't fulfilled!"
                    },
                    headers: {}
                });
            }
        }
    }
}
export default Http;