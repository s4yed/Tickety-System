import ConstService from "../constants";
import Http from "../utils/httpUtil";

const {Users, Headers} = ConstService;

const AdminService = {
    isAdmin: async () => {
        const res = await new Http().request("get", Users.userAdmin, {headers: Headers.jsonHeader});
        return res.body.admin;
    }
};
export default AdminService;