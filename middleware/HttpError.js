class HttpError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export default HttpError;

// MONGO_URI=mongodb://ankitmor1811_db_user:4FC9E7Uk3VrULudU@ac-agxnd8z-shard-00-00.fnc6kxj.mongodb.net:27017,ac-agxnd8z-shard-00-01.fnc6kxj.mongodb.net:27017,ac-agxnd8z-shard-00-02.fnc6kxj.mongodb.net:27017/?ssl=true&replicaSet=atlas-10e30b-shard-0&authSource=admin&appName=Cluster0
// PORT=5000
// JWT_SECRET=ankitAhir123