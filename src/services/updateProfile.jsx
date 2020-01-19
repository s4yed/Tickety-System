import axios from "axios";
import AuthService from "./auth/authenticate";
import ConstService from "./constants";
const { API, Headers } = ConstService;

const UpdateProfileService = {
    token: AuthService.getToken(),
    updateData: async (data) => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.post(`${API}/profile/update`, data, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data);
            return res.data;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }

    },
    updateToken: async (data) => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.post(`${API}/users/update`, data, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data);
            localStorage.setItem("jwt_token", res.data.token);
            return true;
        }
        catch (err) {
            console.log(Object.values(err)[2].data)
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    updatePhoto: async (photoData) => {
        try {
            const headers = Headers(AuthService.getToken()).fileHeader;
            const res = await axios.post(`${API}/imageUpload`, photoData, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);

            console.log(res.data.file.path);
            return res.data.file.path;
        }
        catch (err) {
            console.log(Object.values(err)[2].data)
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    updatePassword: async (pass) => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.post(`${API}/users/reset-pass`, pass, { headers })
            if (!res.data.success)
                return console.log(res.data.error.msg);

            console.log(res.data);
            return res.data.msg;
        } catch (err) {
            console.log(Object.values(err)[2].data)
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    }
}
export default UpdateProfileService;