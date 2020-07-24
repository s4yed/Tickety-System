import ConstService from "../constants";
import Http from "../utils/httpUtil";

const {Users, Headers, Tickets} = ConstService;

class TicketService {
    constructor() {
        this.http = new Http();
        this.headers = Headers.jsonHeader;
    }

    async getAllTickets(page, limit) {
        const params = {page, limit};
        const res = await this.http.request("get", Tickets._base, {params});
        return res.body.results.tickets;
    }

    async getTopTickets() {
        const params = {page: 1, limit: 10};
        const res = await this.http.request("get", Tickets._base, {params});
        return res.body.results.tickets;
    }

    async getMatchTickets() {
        const res = await this.http.request("get", Tickets.match, {headers: this.headers});
        return res.body.matches;
    }

    async getBusTickets() {
        const res = await this.http.request("get", Tickets.bus, {headers: this.headers});
        return res.body.buses;
    }

    async getTrainTickets() {
        const res = await this.http.request("get", Tickets.train, {headers: this.headers});
        return res.body.trains;
    }

    async getCinemaTickets() {
        const res = await this.http.request("get", Tickets.cinema, {headers: this.headers});
        return res.body.cinemas;
    }

    async searchTickets(query) {
        const params = {query};
        const res = await this.http.request("get", Tickets.cinema, {params});
        return res.body.tickets;
    }

    async getTicketById(id) {
        const res = await this.http.request("get", `${Tickets._base}/${id}`, {headers: this.headers});
        return res.body.match;
    }

    async addTicket(data) {
        const res = await this.http.request("post", Tickets._base, {headers: this.headers});
        return res.body.ticket;
    }

    async bookTicket(data) {
        const res = await this.http.request("post", Users.bookTicket, {body: data, headers: this.headers});
        return res.body;
    }
}

export default TicketService;