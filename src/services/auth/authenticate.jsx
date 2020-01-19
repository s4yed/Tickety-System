import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Buffer} from "buffer";
import axios from "axios";
import constant from "../constants";
const {API, Headers} = constant;
global.Buffer = Buffer;

class AuthService extends Component {
    authenticated = false;
    token = null;
    user = {};
    async signup(user) {
        try {
            const res = await axios.post(`${API}/auth/signup`, user);
            if (!res.data.success)
                return console.log(res.data.error.msg);
            console.log(res.data);
            return true;
        }
        catch (err) {
            if (Object.values(err)[1].status === 403)
                return false;
        }
    }

    async login(user) {
        try {
            const res = await axios.post(`${API}/auth/login`,user);
            if (!res.data.success)
                return console.log(res.data.error.msg);
            localStorage.setItem("jwt_token", res.data.token);
            return true;
        }
        catch (err) {
            console.log(Object.values(err))
            if (Object.values(err)[1].status === 401)
                return false;
            }
    }
    logout() {
        axios.get(`${API}/auth/logout`).then(res => {
            localStorage.removeItem("jwt_token");
            console.log(res);
        }, err => console.log(err))
            .catch(err => console.log(err));
    }

    isAuthenticated() {
        this.token = localStorage.getItem("jwt_token");
        if (!this.token) {
            this.authenticated = false;
        } else {
            this.authenticated = true;
        }
        return this.authenticated;
    }

    async getUserData() {
        try {
            const headers = Headers(this.getToken()).jsonHeader;
            const res = await axios.get(`${API}/users/user_data`, {headers});
            return res.data.user;
        }catch (err) {
            console.log(Object.values(err)[2].data)
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    }
    
    getToken() {
        // const {token} = this.state;
        if(this.isAuthenticated()) {
            return this.token;
        }
        return null;
    }

    render() {
        if (this.isAuthenticated()) {
            return (
                <Redirect to={`/profile`} />
            )
        }

        return (
            <Redirect to="/login" />
        )
    }
}

export default new AuthService();