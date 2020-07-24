import AuthService from "./auth/authenticate";
import ConstService from "./constants";
import Http from "./utils/httpUtil";

const {Users, Headers, ImageUpload, jwtToken} = ConstService;

class UpdateProfileService {
    constructor() {
        this.http = new Http();
    }

    async updateData(data) {
        const res = await this.http.request("post", Users.updateProfile,
            {body: data, headers: Headers.jsonHeader});
        if (res.code === 202)
            return res.body;
    }

    async updateToken(data) {
        const res = await this.http.request("post", Users.updateToken,
            {body: data, headers: Headers.jsonHeader});
        localStorage.setItem(jwtToken, res.body.token);
        return res.body;
    }

    async updatePhoto(photoData) {
        const res = await this.http.request("post", ImageUpload._base,
            {body: photoData, headers: Headers.fileHeader});
        localStorage.setItem(jwtToken, res.body.token);
        return res.body.file;
    }

    async updatePassword(pass) {
        const res = await this.http.request("post", Users.resetPass,
            {body: pass, headers: Headers.jsonHeader});
        return res.body;
    }
}

export default UpdateProfileService;