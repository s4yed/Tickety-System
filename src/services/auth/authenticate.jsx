import {Buffer} from "buffer";
import ConstService from "../constants";
import Http from "../utils/httpUtil";

const {Auth, Headers, Users, jwtToken} = ConstService;

class AuthService {
    constructor() {
        this.http = new Http();
    }

    async signUp(user) {
        return (await this.http.request("post", Auth.signUp, {body: user})).body.success;
    }

    async login(user) {
        const res = await this.http.request("post", Auth.login, {body: user});
        localStorage.setItem(jwtToken, res.body.token);
        return res.body.success;
    }

    async logout() {
        localStorage.removeItem(jwtToken);
        return await this.http.request("get", Auth.logout, {});
    }

    isAuthenticated() {
        this.token = localStorage.getItem(jwtToken);
        return !(this.token === null || this.token === undefined);
    }

    async getUserData() {
        const res = await this.http.request("get",
            Users.userData,
            {headers: Headers.jsonHeader});
        return res.body.user;
    }
}

export default AuthService;