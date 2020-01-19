import axios from "axios";
import AuthService from "./authenticate";
import ConstService from "../constants";
const {API, Headers} = ConstService;

const AdminService = {
    isAdmin: async () => {
        try {
            const token = AuthService.getToken();
            const res = await axios.get(`${API}/users/admin`, {headers: Headers(token).jsonHeader});
            if (!res.data.success) return console.log(res.data.error.msg);
            return res.data.admin;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    }
};
export default AdminService;