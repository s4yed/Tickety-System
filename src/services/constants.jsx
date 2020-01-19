const baseURI = "http://localhost:5000";
export default {
    API: `${baseURI}/api`,
    Headers: token => {
        return {
            jsonHeader: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            fileHeader: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        };
    },
    baseURI
};
