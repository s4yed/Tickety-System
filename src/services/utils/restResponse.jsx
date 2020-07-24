class RestResponse {
    constructor(response) {
        this.code = response.status;
        this.body = response.data;
        this.headers = response.headers;
    }
}

export default RestResponse;