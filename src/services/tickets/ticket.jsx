import axios from "axios";
import ConstService from "../constants";
import AuthService from "../auth/authenticate";
const { API, Headers } = ConstService;

const TicketService = {
    getAllTickets: async (page, limit) => {
        try {
            const params = {
                page,
                limit
            };
            const res = await axios.get(`${API}/tickets`, { params });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data.tickets);
            return res.data.results.tickets;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    getTopTickets: async () => {
        try {
            const params = {
                page: 1,
                limit: 8
            };
            const res = await axios.get(`${API}/tickets`, { params });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            return res.data.results.tickets;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    getMatchTickets: async () => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.get(`${API}/tickets/matches`, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data);
            return res.data.matches;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    getBusTickets: async () => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.get(`${API}/tickets/buses`, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data);
            return res.data.buses;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    getTrainTickets: async () => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.get(`${API}/tickets/trains`, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data);
            return res.data.trains;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    getCinemaTickets: async () => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.get(`${API}/tickets/cinemas`, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data);
            return res.data.cinemas;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    searchTickets: async (query) => {
        try {
            const params = {
                query,
            };
            const res = await axios.get(`${API}/tickets`, { params });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data);
            return res.data.tickets.cinemas;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    getTicketById: async (id) => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.get(`${API}/tickets/matches/${id}`, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            // console.log(res.data);
            return res.data.match;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    addTicket: async (data) => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.post(`${API}/tickets`, data, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            console.log(res.data);
            return res.data.ticket;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    },
    bookTicket: async (data) => {
        try {
            const headers = Headers(AuthService.getToken()).jsonHeader;
            const res = await axios.post(`${API}/users/add_ticket`, data, { headers });
            if (!res.data.success)
                return console.log(res.data.error.msg);
            console.log(res.data);
            return res.data.msg;
        }
        catch (err) {
            console.log(Object.values(err)[2].data);
            if (Object.values(err)[2].status === 400 || Object.values(err)[2].status === 500)
                return Object.values(err)[2].data;
        }
    }
};
export default TicketService;