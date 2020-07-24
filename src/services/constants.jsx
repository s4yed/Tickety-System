const baseURI = "http://localhost:5000";
const token = localStorage.getItem("jwt_token");
const ConstService = {
    API: `${baseURI}/api`,
    jwtToken: "jwt_token",
    Headers: {
        jsonHeader: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        fileHeader: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
        }
    },
    baseURI,
    Auth: {
        _base: `${baseURI}/api/auth`
        login: `${this._base}/auth/login`,
        signUp: `${this._base}/singup`,
        logout: `${this._base}/logout`,
    },
    Users: {
        _base: `${baseURI}/api/users`,
        userData: `${this._base}/user_data`,
        userAdmin: `${this._base}/admin`,
        updateToken: `${this._base}/update_token`,
        updateProfile: `${this._base}/update_profile`,
        resetPass: `${this._base}/update_profile`,
        bookTicket: `${this._base}/book_ticket`
    },
    ImageUpload: {
        _base: `${baseURI}/api/image_upload`
    },
    Tickets: {
        _base: `${baseURI}/api/tickets`,
        cinema: `${this._base}/cinemas`,
        bus: `${this._base}/buses`,
        train: `${this._base}/trains`,
        match: `${this._base}/matches`,
    }
};

export default ConstService;